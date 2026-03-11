# Task Tracker CLI

A simple **Task Tracker CLI** built with **Node.js** to manage tasks from the command line.
Tasks are stored locally in a JSON file and support multiple statuses, timestamps, filtering,
and an interactive mode.

---
## Project URL

https://github.com/lucky-blessed/task-cli


## Features

- Add, update, and delete tasks
- Mark tasks as:
  - `todo`
  - `in-progress`
  - `done`
- List tasks:
  - all tasks
  - done tasks
  - in-progress tasks
  - not-done tasks
- Show task details with timestamps
- Interactive CLI mode
- Persistent storage using a local JSON file

---

## Requirements

- Node.js v16 or higher
- npm

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/task-tracker.git
cd task-tracker
npm install
```

Link the CLI globally:

```bash
npm link
```

---

## Usage (Command Mode)

Add a task:
```bash
task-cli add "Buy groceries"
```

Update a task:
```bash
task-cli update 1 "Buy groceries and cook dinner"
```

Delete a task:
```bash
task-cli delete 1
```

Mark a task as done:
```bash
task-cli done 1
```

Mark a task as in progress:
```bash
task-cli progress 1
```

List tasks:
```bash
task-cli list
task-cli list done
task-cli list in-progress
task-cli list not-done
```

Show task details:
```bash
task-cli show 1
```

---

## Interactive Mode

Start interactive mode:
```bash
task-cli
```

Example session:
```text
Lucky-Task-Cli>> add Learn Node.js
Lucky-Task-Cli>> progress 2
Lucky-Task-Cli>> list in-progress
Lucky-Task-Cli>> show 2
Lucky-Task-Cli>> exit
```

Exit interactive mode using:
```text
exit
```
or
```text
quit
```

---

## Task Storage

Tasks are stored in:
```
data/tasks.json
```

Task format:
```json
{
  "id": 1,
  "description": "Learn Node.js",
  "status": "in-progress",
  "createdAt": "2025-12-26T01:15:27.309Z",
  "updatedAt": "2025-12-26T01:16:35.086Z"
}
```

---

## Project Structure

```
task-tracker/
├── bin/
│   └── task-cli
├── data/
│   └── tasks.json
├── package.json
└── README.md
```

---

## Author

**Lucky Nkwor**  
GitHub: https://github.com/lucky-blessed  
Email: blessednkwor7@gmail.com


## License

MIT License
