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

- [Link](https://docs.google.com/spreadsheets/d/1V1M3Eq1NXH2PNmeTlVviRhEjX9kenq769Vo2P5mMtro/edit?usp=sharing)

## Time/Priority Matrix
- [Link]()

#### MVP (examples)
- Backend server and database to hold employee and to-do list data
- Functionality to add, remove, and update employee cards in database
- Functionality to add, remove, and update employee to-do list in database
- Automatically update and serve backend data to match user frontend

#### PostMVP 
- Functionality to add another section, hobbies, to each employee card

## Functional Components

#### MVP
| Component | Priority | Estimated Time | Time Invested |
| --- | :---: |  :---: | :---: |
| Configure Server | H | 1hr | 1.5hr |
| Employee Schema and Model | H | 3hr |
| Employee Route Handlers | H | H | -hr |
| Employee Routes | H | 1.5hr| -hr |
| Connect to Employee Server/Test Endpoints | M | 4hr | -hr |
| To-do List Schema and Model | H | 3hrs| 2hr |
| To-do List Router Handlers | H | 3hr | -hr |
| To-Do List Routes | L | 1hr | -hr |
| Connect to Server/Test To-Do List Endpoints | L | 1hr | -hr |
| Total | H | 15.5hrs| -hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invested |
| --- | :---: |  :---: | :---: |
| Project Hover | L | 3hr | -hr |
| Banner letters wiggle | L | 1hr | -hr |
| Interactive Banner | M | 4hr | -hr |
| Materialize | H | 4hr | -hr |
| Bootstrap | H | 4hr | -hr |
| Make own icon | L | 4hr | -hr |
| Total | H | 20hrs| -hrs | -hrs |

## Additional Libraries
 - [Mongoose]()
 - [Express]()
 - [Dotenv]()
 - [Morgan]()
 - [Nodemon]()
 - [Cors]()

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
