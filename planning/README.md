# Project (Backend) Overview

## Project Link
- TBD

## Project (Frontend Overview)
- [Frontend Overview](https://github.com/jordanchude/to-do-list-frontend)

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Priority Matrix / Backend Timeline | Incomplete
|Day 2| Working RestAPI | Incomplete
|Day 3| Working RestAPI & Frontend Communication | Incomplete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches and Present | Incomplete

## Project Description

For my unit 02 project, I am going to create a to-do list tracker for a company and its employees. For the backend, each user request will either create a new employee (with their name, title, and to-do items displayed), edit/update an employee, delete an employee, create a new to-do item for a specific employee, edit/update a to-do item, or delete a to-do item. As each employee or employee to-do is created, edited or updated on the webpage, it'll be sent to a backend server to update the relevant data and show the user an updated webpage to reflect the changes.

## User Stories
**Users are able to...**
- Use a responsive navigation bar on desktop, tablet, and mobile to navigate to the to-do list section and the top of the page.
- Scroll down to each added employee and their corresponding to-do list to stay updated on any changes.
- Press a call-to-action button under the header/jumbotron to add an employee card with their name, title, photo for the top of their to-do list, and to-do list items.
- Press an edit button on each created card to edit the name, photo, title, and/or to-do list to reflect any to-do list, title, name, or preferred photo updates.
- Press a delete button on each created card to remove a card when an employee is terminated.

## Google Sheet

- [Link](https://docs.google.com/spreadsheets/d/1DRhpnHYU-LVnRYKSALXm_xbMCZ3FsTs6Zl-VJ1MU49E/edit?usp=sharing)

## Time/Priority Matrix
- [Link]()

#### MVP (examples)
- Backend server and database to hold employee and to-do list data
- Functionality to add, remove, and update employee cards in database
- Functionality to add, remove, and update employee to-do list in database
- Automatically update and serve backend data to match user frontend
- Deploy app to heroku

#### PostMVP 
- Functionality to add another section, hobbies, to each employee card

## Functional Components

#### MVP
|Letter | Component | Priority | Estimated Time | Time Invested |
| --- | --- | :---: |  :---: | :---: |
| A | Configure Server | H | 1hr | -hr |
| B | Employee Schema and Model | H | 1hr | -hr|
| C | Employee Route Handlers | H | 1hr | -hr |
| D | Employee Routes | H | 1hr| -hr |
| E | Connect to Employee Server/Test Endpoints | H | 4hr | -hr |
| F | To-do List Schema and Model | H | 1hrs| 2hr |
| G | To-do List Router Handlers | H | 1hr | -hr |
| H | To-Do List Routes | H | 1hr | 1hr |
| I | Connect to Server/Test To-Do List Endpoints | H | 4hr | -hr |
| J | Functionality to Request Data & Populate Dom | H | 2hr | -hr |
| K | Create: Grab Form Data & Submit Request | H | 2hr | -hr |
| L | Delete: Send Request to Delete Data | H | 2hr | -hr |
| M | Edit: Take Item Data and Populate Form | H | 2hr | -hr |
| N | Update: Take Data from Edit Form & Submit Update Request | H | 2hr | -hr |
| O | Deployment | H | 3hr | -hr |
| -- | Total | H | 28hrs| -hrs |

#### PostMVP
|Letter | Component | Priority | Estimated Time | Time Invested |
| --- | --- | :---: |  :---: | :---: |
| P | Hobbies Schema and Model | H | 1hr | -hr|
| Q | Hobbies Route Handlers | H | 1hr | -hr |
| R | Hobbies Routes | H | 1hr| -hr |
| S | Connect to Employee Server/Test Endpoints | H | 4hr | -hr |
| -- | Total | 7hrs| -hrs | -hrs |

## Additional Libraries
 - [Mongoose](https://mongoosejs.com/)
 - [Express](http://expressjs.com/)
 - [Dotenv](https://www.npmjs.com/package/dotenv)
 - [Morgan](https://www.npmjs.com/package/morgan)
 - [Nodemon](https://nodemon.io/#:~:text=Nodemon%20is%20a%20utility%20that,restart%20when%20your%20code%20changes.)
 - [Cors](https://www.npmjs.com/package/cors)

## Code Snippet

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions

#### SAMPLE
- **ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                       
- **RESOLUTION**: Missing comma after first object in sources {} object
