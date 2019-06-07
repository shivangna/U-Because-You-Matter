# U: Because You Matter

_Main Contributors_: [Shivangna](https://github.com/shivangna), [Jocelyne](https://github.com/Jocelyne1604), [Michael](https://github.com/mikewitk)

"U:" is a mental health journaling app that provides users with a space to get real-time insights into their mental well-being

## SCREENSHOTS

### LOGIN PAGE

!["Login Page showing users the app functionality using a progress bar"](https://github.com/shivangna/lhl-final-project/blob/master/Docs/login.png)

### JOURNAL MODULE

!["Journal module where users can input their text entry. Watson APi will generate feedback based on five emotions which will be rendered using liquid gauge graph"](https://github.com/shivangna/lhl-final-project/blob/master/Docs/Journal.gif)

### MOOD MODULE

!["5 cartoon characters based on basic human emotions and a heatmap wich date for each filled with an emotion color"](https://github.com/shivangna/lhl-final-project/blob/master/Docs/Mood.gif)

### CHALLENGE MODULE

!["Challenges for the user to go through the day whenever they are not feeling themselves."](https://github.com/shivangna/lhl-final-project/blob/master/Docs/Challenge.gif)

### TODO LIST MODULE

!["A To Do list to help the users focused on what's important. Whenever the user completes a task, a positive reinforcement message is displayed"](https://github.com/shivangna/lhl-final-project/blob/master/Docs/TodoList.gif)

"U:" is a single page app built using:

_FRONT-END_

- React
- CSS
- React Bootstrap

_BACK-END_

- Node JS
- Express

_DATABASE_

- PSQL
- Knex

_APIs_

- Watson Natural Language Understanding
- Real-Time Graphs

## GETTING STARTED

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the npm install command (root and client directories).
3. Go to https://www.ibm.com/watson/services/natural-language-understanding/, create an account, download the ibm-credentials.env file and place it on root folder
4. Start the web server using the npm start command. The app will be served at http://localhost:5000/.
5. Start the client using the npm start command. The app will be served at http://localhost:3000/
6. Go to:

- http://localhost:3000/login for the login page
- http://localhost:3000/app for the app page
