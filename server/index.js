const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const path = require("path");
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
