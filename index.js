const express = require("express");
const path = require("path");
const ENV = process.env.ENV || "development";
const app = express();

const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const knexLogger = require("knex-logger");
var bodyParser = require('body-parser');

app.use(knexLogger(knex));
app.use(bodyParser.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

//posts mood 
app.post("/mood", (req,res) => {
  console.log("post request mood", req.body)
})

//gets moods from db 
app.get("/mood", (req, res) => {
  knex('users')
    .join('moods', 'users.id', '=', 'moods.user_id')
    .select('users.id', 'moods.mood', 'moods.mood_date')
    .then((results) => {
      console.log('this are the results', results)
      res.json(results)
    })
});




// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);



