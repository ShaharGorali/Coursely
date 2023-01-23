const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const db = require("./Models/sql");
const courses = require("./Routes/courses");
const users = require("./Routes/users");
const auth = require("./Routes/auth");

app.use(cors());
app.use(express.json()); //Convert json to JS and JS to json
app.use(morgan("tiny"));
app.use("/courses", courses);
app.use("/signup", users);
app.use("/register", auth);

const port = 4000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
