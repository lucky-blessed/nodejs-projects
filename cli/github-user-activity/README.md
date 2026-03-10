# GitHub User Activity CLI

A simple **Node.js command line interface (CLI)** tool that fetches and displays the recent public activity of any GitHub user.

This tool uses the GitHub Events API to retrieve activity and formats it into a clean, human-readable output directly in your terminal.

---

## Features

* Fetch recent public activity of any GitHub user
* Display activity in a readable format
* Supports multiple event types including:

  * Push events
  * Star events
  * Fork events
  * Create events
* Groups repeated push events by repository
* Lightweight and easy to use

---

## Example Output

```bash
github-activity lucky-blessed
```

Output:

```
Fetching activity for lucky-blessed...

- Pushed 6 time(s) to lucky-blessed/software-testing
- Pushed 4 time(s) to lucky-blessed/nodejs-projects
- Pushed 1 time(s) to lucky-blessed/python_projects
- Starred lucky-blessed/alx-backend-python
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/lucky-blessed/nodejs-projects.git
```

Navigate into the project directory:

```bash
cd nodejs-projects/cli/github-user-activity
```

Install dependencies:

```bash
npm install
```

Link the CLI globally:

```bash
npm link
```

---

## Usage

Run the CLI with a GitHub username:

```bash
github-activity <username>
```

Example:

```bash
github-activity john-deo
```

The CLI will fetch and display the recent public activity of the specified user.

---

## Project Structure

```
github-user-activity/
│
├── bin/
│   └── github-activity.js      # CLI entry point
│
├── src/
│   └── githubApi.js            # GitHub API request logic
│
├── utils/
│   └── formatEvents.js         # Formats GitHub events into readable messages
│
├── package.json
└── README.md
```

---

## How It Works

1. The CLI accepts a GitHub username as input.
2. It sends a request to the GitHub Events API:

```
https://api.github.com/users/<username>/events
```

3. The API returns a list of recent public activity events.
4. The events are processed and formatted into readable messages.
5. The formatted activity is displayed in the terminal.

---

## Technologies Used

* Node.js
* JavaScript
* GitHub REST API

---

## Possible Future Improvements

* Add support for more event types
* Add colored CLI output
* Add activity limits (e.g., show only the last 5 events)
* Add caching to reduce API calls

---

## Author

Lucky Nkwor

---

## License

This project is open source and available under the MIT License.
