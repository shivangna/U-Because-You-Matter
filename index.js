const express = require("express");
const path = require("path");
const ENV = process.env.ENV || "development";
const app = express();

const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const knexLogger = require("knex-logger");
var bodyParser = require("body-parser");

app.use(knexLogger(knex));
app.use(bodyParser.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

//posts mood
app.post("/mood", (req, res) => {
  console.log("post request date", req.body.date);
  console.log("post request mood", req.body.mood);
  return knex("moods")
    .select()
    .where({ mood_date: req.body.date, user_id: 1 })
    .then(function(rows) {
      if (rows && rows.length) {
        // no matching records found
        return knex("moods")
          .where({ mood_date: req.body.date, user_id: 1 })
          .update({ mood: req.body.mood })
          .then(() => (res.json({msg: 'send ok!'})))
      } else {
        knex("moods")
          .insert({ user_id: 1, mood: req.body.mood, mood_date: req.body.date })
          .then(() => (res.json({msg: 'send ok!'})));
      }
    })
    .catch(function(ex) {
      res.send('err')
      console.log("err", ex);
    });
});

//gets moods from db
app.get("/mood", (req, res) => {
  knex("users")
    .join("moods", "users.id", "=", "moods.user_id")
    .select("users.id", "moods.mood", "moods.mood_date")
    .then(results => {
      res.json(results);
    });
});


//gets journal entries from db
app.get("/journal", (req, res) => {
  knex("users")
    .join("journal_entries", "users.id", "=", "journal_entries.user_id")
    .select("users.id", "journal_entries.journal_entry", "journal_entries.journal_date")
    .then(results => {
      res.json(results);
    });
});

//posts journal entries to db
app.post("/journal", (req, res) => {
  console.log("post request journal date", req.body.date);
  console.log("post request journal entry", req.body.mood);
  return knex("moods")
    .select()
    .where({ mood_date: req.body.date, user_id: 1 })
    .then(function(rows) {
      if (rows && rows.length) {
        // no matching records found
        return knex("moods")
          .where({ mood_date: req.body.date, user_id: 1 })
          .update({ mood: req.body.mood })
          .then(() => (res.json({msg: 'send ok!'})))
      } else {
        knex("moods")
          .insert({ user_id: 1, mood: req.body.mood, mood_date: req.body.date })
          .then(() => (res.json({msg: 'send ok!'})));
      }
    })
    .catch(function(ex) {
      res.send('err')
      console.log("err", ex);
    });
});





// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
