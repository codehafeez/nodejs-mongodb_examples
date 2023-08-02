// DB collection insert multiple data

const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');

async function insertData() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected Successfully!');

    // Access the hafeez_db database
    const database = client.db('hafeez_db');

    // Access the Persons collection
    const collection = database.collection('Persons');

    // Data to be inserted
    const dataToInsert = [
      { name: "Alice", age: 25, email: "alice@example.com" },
      { name: "Bob", age: 28, email: "bob@example.com" },
      { name: "Eve", age: 22, email: "eve@example.com" }
    ];

    // Insert the data into the collection
    const result = await collection.insertMany(dataToInsert);
    console.log('Data inserted successfully:', result);

  } catch (error) {
    console.log('Failed to connect or insert data:', error);
  } finally {
    // Close the database connection
    client.close();
    console.log('Exiting..');
  }
}

// Call the insertData function to insert the data
insertData();
