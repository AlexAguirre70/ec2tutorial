const express = require("express");
const router = express.Router();
const cors = require("cors");
const path = require("path")
const bodyParser = require("body-parser");
require('dotenv').config();

//Server
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

//ENV
const Port = process.env.PORT || 5000

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"))
});

app.listen(Port, () => console.log(`Server running on ${Port} and React Served`));