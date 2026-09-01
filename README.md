## TaskNest API

TaskNest API is a REST API for managing tasks. It was developed using Node.js, Express.js and MySQL.

### Features

- Create a task
- List all tasks
- Retrieve a task by ID
- Update a task
- Delete a task

### Project Structure

- `controllers` contains request and response logic.
- `models` contains MySQL queries.
- `routes` contains the API endpoints.
- `db` contains the database connection.
- `database.sql` creates the database and tasks table.
- `app.js` starts the Express server.

## Installation

1. Clone the repository.
2. Run `npm install`.
3. Start MySQL.
4. Run the SQL in `database.sql`.
5. Run `npm start`.

### API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/v1/tasks` | Create a task |
| GET | `/v1/tasks` | List all tasks |
| GET | `/v1/tasks/:id` | Get a task by ID |
| PUT | `/v1/tasks/:id` | Update a task |
| DELETE | `/v1/tasks/:id` | Delete a task |

### Technologies

1. Node.js
2. Express.js
3. MySQL
4. Postman