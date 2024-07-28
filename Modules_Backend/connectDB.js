// connectDB.js
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_SECRET_KEY;

let client;

async function connectDB() {
  if (!client) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
    await client.connect();
    console.log("Successfully connected to MongoDB!");
  }
  return client;
}

async function getDB() {
  const client = await connectDB();
  return client.db('FlickDB');  // Use the FlickDB database
}

module.exports = {
  connectDB,
  getDB
};
