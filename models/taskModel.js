const db = require("../db/db");

const createTask = (title, callback) => {
    const sql = "INSERT INTO tasks (title) VALUES (?)";
    db.query(sql, [title], callback);
};

const getAllTasks = (callback) => {
    const sql = "SELECT id, title, is_completed FROM tasks";
    db.query(sql, callback);
};

const getTaskById = (id, callback) => {
    const sql = "SELECT id, title, is_completed FROM tasks WHERE id = ?";
    db.query(sql, [id], callback);
};

const updateTask = (id, title, isCompleted, callback) => {
    const sql = `
        UPDATE tasks
        SET title = ?, is_completed = ?
        WHERE id = ?
    `;

    db.query(sql, [title, isCompleted, id], callback);
};

const deleteTask = (id, callback) => {
    const sql = "DELETE FROM tasks WHERE id = ?";
    db.query(sql, [id], callback);
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
};