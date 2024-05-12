const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "TodoList";
const collectionName = "todos";

let currentId = 1;

const todosRepo = () => {
  const load = async (todos) => {
    return new Promise(async (resolve, reject) => {
      const client = new MongoClient(url);
      try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        todos = todos.map((todo) => {
          todo._id = currentId++;
          return todo;
        });
        const results = await collection.insertMany(todos);
        resolve(results);
      } catch (err) {
        reject(err);
      } finally {
        client.close();
      }
    });
  };

  const get = async (query = {}, limit = 0) => {
    return new Promise(async (resolve, reject) => {
      const client = new MongoClient(url);
      try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const results = await collection.find(query).toArray();
        if (limit > 0) return results.slice(0, limit);
        resolve(results);
      } catch (err) {
        reject(err);
      } finally {
        client.close();
      }
    });
  };

  const getById = async (id) => {
    return new Promise(async (resolve, reject) => {
      const client = new MongoClient(url);
      try {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const results = await collection.findOne({ _id: id });
        resolve(results);
      } catch (err) {
        reject(err);
      } finally {
        client.close();
      }
    });
  };

  const post = async (todo) => {
    return new Promise(async (resolve, reject) => {
      const client = new MongoClient(url);
      try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        todo._id = currentId++;
        const result = await collection.insertOne(todo);
        resolve(result);
      } catch (err) {
        reject(err);
      } finally {
        client.close();
      }
    });
  };

  const put = async (id, todo) => {
    return new Promise(async (resolve, reject) => {
      const client = new MongoClient(url);
      try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.replaceOne({ _id: id }, todo);
        resolve(result);
      } catch (err) {
        reject(err);
      } finally {
        client.close();
      }
    });
  };

  const remove = async (id) => {
    return new Promise(async (resolve, reject) => {
      const client = new MongoClient(url);
      try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.deleteOne({ _id: id });
        resolve(result);
      } catch (err) {
        reject(err);
      } finally {
        client.close();
      }
    });
  };

  return { load, get, getById, post, put, remove };
};

module.exports = todosRepo();
