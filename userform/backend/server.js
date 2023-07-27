const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "test",
  port: 3307,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.stack);
    return;
  }

  console.log("Connected to MySQL as ID:", connection.threadId);

  // Perform database queries or operations here

  connection.end((err) => {
    if (err) {
      console.error("Error disconnecting from MySQL:", err.stack);
      return;
    }
  });
});

app.get("/", (req, res) => {
  res.send("From server side");
});

app.get("/users", (req, res) => {
  const userId = req.query.id; // Get the 'id' query parameter if provided

  if (userId) {
    // If 'id' query parameter is provided, retrieve information for the specific user
    const sql = "SELECT * FROM users WHERE user_id = ?";
    db.query(sql, [userId], (err, data) => {
      if (err) return res.json(err);

      if (data.length === 0) {
        // If no user is found with the provided ID, return an empty response
        return res.json([]);
      }

      return res.json(data[0]);
    });
  } else {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  }
});

app.post("/users", (req, res) => {
  const { body } = req;
  const { name, username, password, email } = body;

  console.log({ name, username, password, email });
  if (!name || !username || !password || !email) {
    return res.status(400).json({ error: "One or more fields are invalid." });
  }

  const sql =
    "INSERT INTO users (username, password, name, email) VALUES (?, ?, ?, ?)";
  connection.query(sql, [username, password, name, email], (err, result) => {
    if (err) {
      return res.json(err);
    }

    // User successfully added to the database
    return res.json({
      message: "User added successfully",
      userId: result.insertId,
    });
  });
});

app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;

  // Delete the user from the database
  const deleteUserSql = "DELETE FROM users WHERE user_id = ?";
  db.query(deleteUserSql, [userId], (deleteErr, deleteResult) => {
    if (deleteErr) {
      console.error("Error deleting user:", deleteErr);
      return res.status(500).json({ message: "Failed to delete user" });
    }

    // Check if any row was affected (deleted)
    if (deleteResult.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // User deleted successfully
    res.status(200).json({ message: "User deleted successfully" });
  });
});

app.listen(8080, () => {
  console.log("running on port 8080");
});
