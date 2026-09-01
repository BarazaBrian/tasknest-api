const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tasknest_db"
});

db.connect((error) => {
    if (error) {
        console.log("Database connection failed:", error);
        return;
    }

    console.log("Connected to MySQL database");
});

module.exports = db;