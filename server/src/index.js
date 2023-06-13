require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./api");
const pages = require("./pages");

console.info("Starting server...");

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api", routes);
app.use(pages);

const PORT = process.env.NODE_PORT;
const server = app.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`);
});

module.exports = server;
