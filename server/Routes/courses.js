const express = require("express");
const router = express.Router();
const Joi = require("joi");
const db = require("../Models/sql");
const _ = require("lodash");
const auth = require("../Middlewares/auth");

// === Get all courses === //
router.get("/", async (req, res) => {
  const query = "SELECT * FROM courses";
  try {
    const { rows } = await db.query(query);
    res.status(200).send(rows);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
// === Get course by ID === //
router.get("/:user_id", async (req, res) => {
  const id = req.params.user_id;
  const query = `SELECT * FROM courses WHERE user_id='${id}'`;
  try {
    const { rows } = await db.query(query);
    res.status(200).send(rows);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
// === Delete one === //
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let query = `DELETE FROM courses WHERE course_id= ${id}`;
  try {
    const { rows } = await db.query(query);
    res.status(200).send(rows);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
// === Add new course === //
router.post("/", async (req, res) => {
  let courseNum = 1;
  let count;
  const body = req.body;
  let { subject, user_id } = body;
  try {
    const counter = async () => {
      let query = `SELECT COUNT(*) FROM courses WHERE course_name='${
        subject + courseNum
      }'`;
      const { rows } = await db.query(query);
      count = rows[0].count;
      return count;
    };
    count = await counter();
    if (count == "22") {
      courseNum++;
      counter();
    }
    query = `SELECT subject FROM subjects WHERE subject_id = '${subject}'`;
    let result = await db.query(query);
    subjectname = result.rows[0].subject;
    const courseName = subjectname + courseNum;
    query = `INSERT INTO courses (course_name, subject, user_id) VALUES($1, $2, $3) returning *`;
    const values = [courseName, subject, user_id];
    const { rows } = await db.query(query, values);
    res.status(200).send(rows[0]);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
