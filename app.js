const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
require("./db/db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "TaskNest API is running"
    });
});

app.use("/v1/tasks", taskRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});