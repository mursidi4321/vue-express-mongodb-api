const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

/** Middlewar */
app.use(bodyParser.json());
app.use(cors());

const posts = require("./routes/api/posts");
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
