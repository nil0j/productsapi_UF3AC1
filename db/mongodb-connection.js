

const { MongoClient } = require("mongodb");
// const {mongoURI} = require("../config/config.js");

mongoURI = process.env.MONGO_URI

const dbName = 'products';

// create mongoDB client
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = client;
