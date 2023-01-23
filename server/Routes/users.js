const express = require("express");
const router = express.Router();
const Joi = require("joi");
const db = require("../Models/sql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

// === Get all users === //
router.get("/", async (req, res) => {
  const query = "SELECT * FROM users";
  try {
    const { rows } = await db.query(query);
    res.status(200).send(rows);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
// === Get user by ID === //
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const query = `SELECT user_name FROM users WHERE user_id='${id}'`;
  try {
    const { rows } = await db.query(query);
    res.status(200).send(rows);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
// === Get user by email === //
router.get("/", async (req, res) => {
  const email = req.body.email;
  const query = `SELECT user_name FROM users WHERE email='${email}'`;
  try {
    const { rows } = await db.query(query);
    res.status(200).send(rows);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
// === Delete user === //
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let query = `DELETE FROM users WHERE user_id = '${userID}'`;
  try {
    const { rows } = await db.query(query);
    res.status(200).send(rows);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
// === Update password === //
router.put("/", async (req, res) => {
  const body = req.body;
  const { id, password } = body;
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(id)
  console.log(hashedPassword)
  let query = `UPDATE users SET password = '${hashedPassword}' WHERE user_id = ${id} `;
  try {
    const { rows } = await db.query(query);
    res.status(200).send(rows);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
// === Add new user === //
router.post("/", async (req, res) => {
  const body = req.body;
  let { user_name, email, password } = body;
  let query = "SELECT * FROM users WHERE email = $1";
  try {
    const emailExists = await db.query(query, [email]);
    if (emailExists.rowCount) {
      return res.status(400).send("Email already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    query =
      "INSERT INTO users (user_name, email, password) VALUES ($1, $2, $3) RETURNING user_id, user_name, email";
    const values = [user_name, email, hashedPassword];
    console.log(1);
    const { rows } = await db.query(query, values);
    console.log(1);
    const user = rows[0];
    const token = jwt.sign(
      { user_id: user.user_id, user_name: user.user_name },
      "hashHashHasingblablabla"
    );
    console.log(1);
    // console.log(token)
    res
      .header("x-auth-token", token)
      .header("access-control-expose-headers", "x-auth-token")
      .send(token);
  } catch (err) {
    res.status(400).send("User signing up failed");
  }
});

module.exports = router;
