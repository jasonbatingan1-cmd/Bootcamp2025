# Task Management API
## An API to track and manage tasks to be completed.
### Endpoints = GET, PUT
### Examples = GET all tasks, EDIT (put) existing task, DELETE (post) a task, CREATE (post) a task.

### Status codes: 200 (OK), 201(Created), 401(Unauthorized), 500 (Internal Server Error)

### No authentication required

### Request example: CREATE a task
### API Request: http://mockurl/CREATE
### Request body: {
    "title": "title",
    "description": "description",
    "completed": false,
    "startDate": date,
    "completeByDate": date
}
