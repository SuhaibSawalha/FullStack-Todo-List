const { MongoClient } = require("mongodb");
const notesRepo = require("./repo/todosRepo");
const initalTodos = require("./db/data.json");
require("./api/app");

const url = "mongodb://localhost:27017";
const dbName = "TodoList";
const collectionName = "todos";

(async () => {
  const client = new MongoClient(url);
  try {
    await client.connect();
    await client.db(dbName).dropDatabase();
    await notesRepo.load(initalTodos);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
})();
