const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "studentdb"
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("MySQL Connected");
    }
});

// Insert Student
app.post("/students", (req, res) => {

    const {
        firstName,
        lastName,
        regNo,
        department,
        dob,
        category,
        specialization
    } = req.body;

    const sql = `
    INSERT INTO students
    (first_name,last_name,reg_no,department,dob,category,specialization)
    VALUES (?,?,?,?,?,?,?)
    `;

    db.query(
        sql,
        [
            firstName,
            lastName,
            regNo,
            department,
            dob,
            category,
            specialization
        ],
        (err) => {

            if (err)
                return res.json(err);

            res.json({
                message: "Student Added Successfully"
            });

        }
    );

});

// Get Students
app.get("/students", (req, res) => {

    db.query(
        "SELECT * FROM students",
        (err, result) => {

            if (err)
                return res.json(err);

            res.json(result);

        }
    );

});

app.listen(5000, () => {

    console.log("Server Running on Port 5000");

});