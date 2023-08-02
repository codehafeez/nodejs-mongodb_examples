// DB collection delete multiple data
const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');

async function deleteData() {
  try {
    // Connect to the database
    await client.connect();
    console.log('Connected Successfully!');

    // Access the hafeez_db database
    const database = client.db('hafeez_db');

    // Access the Persons collection
    const collection = database.collection('Persons');

    // Delete all documents where age is 28
    const filter = { age: 28 };

    const result = await collection.deleteMany(filter);
    console.log('Data deleted successfully:', result.deletedCount, 'documents deleted');

  } catch (error) {
    console.log('Failed to connect or delete data:', error);
  } finally {
    // Close the database connection after deleting data
    client.close();
    console.log('Exiting..');
  }
}

// Call the deleteData function to initiate deleting data
deleteData();
