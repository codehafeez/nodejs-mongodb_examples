// DB collection update multiple data

const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');

async function updateData() {
  try {
    // Connect to the database
    await client.connect();
    console.log('Connected Successfully!');

    // Access the hafeez_db database
    const database = client.db('hafeez_db');

    // Access the Persons collection
    const collection = database.collection('Persons');

    // Update all documents where age is 28
    const filter = { age: 28 };
    const update = { $set: { name: 'Updated Bob', email: 'updated_bob@example.com' } };

    const result = await collection.updateMany(filter, update);
    console.log('Data updated successfully:', result.modifiedCount, 'documents updated');

  } catch (error) {
    console.log('Failed to connect or update data:', error);
  } finally {
    // Close the database connection after updating data
    client.close();
    console.log('Exiting..');
  }
}

// Call the updateData function to initiate updating data
updateData();
