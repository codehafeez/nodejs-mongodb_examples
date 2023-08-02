// => Read Data from DB collection and apply condition AND

const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');

async function readData() {
  try {
    // Connect to the database
    await client.connect();
    console.log('Connected Successfully!');

    // Access the hafeez_db database
    const database = client.db('hafeez_db');

    // Access the employees collection
    const collection = database.collection('employees');

    // Query the collection with a condition (AND)
    const condition = {
      employee_email: 'michael.johnson@example.com',
      employee_phone: '555-123-4567'
    };
    
    const documents = await collection.find(condition).toArray();
    console.log('Data read successfully:', documents);

  } catch (error) {
    console.log('Failed to connect or read data:', error);
  } finally {
    // Close the database connection after reading data
    client.close();
    console.log('Exiting..');
  }
}

// Call the readData function to initiate reading data
readData();
