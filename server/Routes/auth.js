const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const db = require("../Models/sql");

router.post("/", async (req, res) => {
  const body = req.body;
  let { email, password } = body;
  const query = `SELECT * FROM users WHERE email = '${email}'`;
  try {
    const { rows } = await db.query(query);
    const user = rows[0];
    if (email != user.email) {
      return res.status(400).send("Invalid email or password");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    console.log(password);
    console.log(user.password);
    if (validPassword) {
      const token = jwt.sign(
        { user_id: user.user_id, user_name: user.user_name },
        "hashHashHasingblablabla"
      );
      token
        ? res.status(200).json(token)
        : res.status(400).send("Invalid email or password");
    }
  } catch (err) {
    res.status(400).send("Invalid email or password");
  }
});

module.exports = router;
