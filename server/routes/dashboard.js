const router = require("express").Router();
const { json } = require("express");
const pool = require("../db");
const authorize = require("../middleware/authorize");

router.get("/", authorize, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT users.user_name, project_id, project1, project2, project3, description1, description2, description3 FROM users LEFT JOIN projects ON users.user_id = projects.user_id WHERE users.user_id = $1",
      [req.user]
    );
    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/projects", authorize, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT project1, project2, project3, description1, description2, description3 FROM projects JOIN users ON projects.user_id = users.user_id WHERE users.user_id = $1",
      [req.user]
    );
    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//create

router.post("/projects", authorize, async (req, res) => {
  try {
    const {
      project1,
      project2,
      project3,
      description1,
      description2,
      description3,
    } = req.body;
    const newProject = await pool.query(
      "INSERT INTO projects (user_id,project1, project2, project3, description1, description2, description3) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        req.user,
        project1,
        project2,
        project3,
        description1,
        description2,
        description3,
      ]
    );
    res.json(newProject.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update

router.put("/projects/:id", authorize, async (req, res) => {
  try {
    const { id } = req.params;
    const {
      project1,
      project2,
      project3,
      description1,
      description2,
      description3,
    } = req.body;
    const updateProject = await pool.query(
      "UPDATE projects SET project1 =$1, project2 =$2, project3 =$3, description1 = $4, description2 = $5, description3 = $6 WHERE project_id = $7 AND user_id=$8 RETURNING *",
      [
        project1,
        project2,
        project3,
        description1,
        description2,
        description3,
        id,
        req.user,
      ]
    );
    if (updateProject.rows.length === 0) {
      return res.json("These are not your projects");
    }
    res.json("update projects");
  } catch (err) {
    console.error(err.message);
  }
});

//delete

router.delete("/projects/:id", authorize, async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProject = await pool.query(
      "DELETE FROM projects WHERE project_id = $1 AND user_id = $2 RETURNING *",
      [id, req.user]
    );
    if (deleteProject.rows.length === 0) {
      res.json("These are not your projects");
    }
    res.json("Projects Deleted");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
