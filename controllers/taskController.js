const taskModel = require("../models/taskModel");

const createTask = (req, res) => {
    const { title } = req.body;

    taskModel.createTask(title, (error, result) => {
        if (error) {
            console.log(error);
            return res.status(500).json({
                error: "Internal server error"
            });
        }

        res.status(201).json({
            id: result.insertId
        });
    });
};

const getAllTasks = (req, res) => {
    taskModel.getAllTasks((error, tasks) => {
        if (error) {
            console.log(error);
            return res.status(500).json({
                error: "Internal server error"
            });
        }

        const formattedTasks = tasks.map((task) => ({
            id: task.id,
            title: task.title,
            is_completed: Boolean(task.is_completed)
        }));

        res.status(200).json({
            tasks: formattedTasks
        });
    });
};

const getTaskById = (req, res) => {
    const id = req.params.id;

    taskModel.getTaskById(id, (error, tasks) => {
        if (error) {
            console.log(error);
            return res.status(500).json({
                error: "Internal server error"
            });
        }

        if (tasks.length === 0) {
            return res.status(404).json({
                error: "There is no task at that id"
            });
        }

        const task = tasks[0];

        res.status(200).json({
            id: task.id,
            title: task.title,
            is_completed: Boolean(task.is_completed)
        });
    });
};

const updateTask = (req, res) => {
    const id = req.params.id;
    const { title, is_completed } = req.body;

    taskModel.getTaskById(id, (findError, tasks) => {
        if (findError) {
            console.log(findError);
            return res.status(500).json({
                error: "Internal server error"
            });
        }

        if (tasks.length === 0) {
            return res.status(404).json({
                error: "There is no task at that id"
            });
        }

        const existingTask = tasks[0];

        const updatedTitle =
            title !== undefined ? title : existingTask.title;

        const updatedStatus =
            is_completed !== undefined
                ? is_completed
                : existingTask.is_completed;

        taskModel.updateTask(
            id,
            updatedTitle,
            updatedStatus,
            (updateError) => {
                if (updateError) {
                    console.log(updateError);
                    return res.status(500).json({
                        error: "Internal server error"
                    });
                }

                res.status(204).send();
            }
        );
    });
};

const deleteTask = (req, res) => {
    const id = req.params.id;

    taskModel.deleteTask(id, (error) => {
        if (error) {
            console.log(error);
            return res.status(500).json({
                error: "Internal server error"
            });
        }

        res.status(204).send();
    });
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
};