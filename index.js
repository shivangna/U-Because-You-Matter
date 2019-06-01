const express = require("express");
const path = require("path");
const ENV = process.env.ENV || "development";
const app = express();
const unirest = require("unirest");

const NaturalLanguageUnderstandingV1 = require("ibm-watson/natural-language-understanding/v1.js");

const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const knexLogger = require("knex-logger");
var bodyParser = require("body-parser");

app.use(knexLogger(knex));
app.use(bodyParser.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: "2018-11-16"
});

//posts mood
app.post("/mood", (req, res) => {
  return knex("moods")
    .select()
    .where({ mood_date: req.body.date, user_id: 1 })
    .then(function(rows) {
      if (rows && rows.length) {
        // no matching records found
        return knex("moods")
          .where({ mood_date: req.body.date, user_id: 1 })
          .update({ mood: req.body.mood })
          .then(() => res.json({ msg: "send ok!" }));
      } else {
        knex("moods")
          .insert({ user_id: 1, mood: req.body.mood, mood_date: req.body.date })
          .then(() => res.json({ msg: "send ok!" }));
      }
    })
    .catch(function(ex) {
      res.send("err");
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
    .select(
      "users.id",
      "journal_entries.journal_entry",
      "journal_entries.journal_date",
      "journal_entries.emotion"
    )
    .then(results => {
      res.json(results);
    });
});

let emotions = "";
//posts journal entries to db
app.post("/journal", (req, res) => {
  let analyzeParams = {
    text: req.body.entry,
    features: {
      emotion: {
        document: true
      }
    }
  };

  let promise1 = new Promise((resolve, reject) => {
    resolve(
      naturalLanguageUnderstanding
        .analyze(analyzeParams)
        .then(analysisResults => {
          emotions = analysisResults.emotion.document.emotion;
        })
        .catch(err => {
          console.log("error:", err);
        })
    );
  });

  promise1.then(() => {
    knex("journal_entries")
      .select()
      .where({ journal_date: req.body.date, user_id: 1 })
      .then(function(rows) {
        if (rows && rows.length) {
          // no matching records found
          knex("journal_entries")
            .where({ journal_date: req.body.date, user_id: 1 })
            .update({ journal_entry: req.body.entry, emotion: emotions })
            .then(() => res.json({ msg: "send ok!" }));
        } else {
          knex("journal_entries")
            .insert({
              user_id: 1,
              journal_entry: req.body.entry,
              journal_date: req.body.date,
              emotion: emotions
            })
            .then(() => res.json({ msg: "send ok!" }));
        }
      })
      .catch(function(ex) {
        res.send({ error: "err" });
        console.log("err", ex);
      });
  });
});

//gets Todotasks from db
app.get("/todo", (req, res) => {
  knex("users")
    .join("todo_tasks", "users.id", "=", "todo_tasks.user_id")
    .select(
      "users.id",
      "todo_tasks.id",
      "todo_tasks.task",
      "todo_tasks.title",
      "todo_tasks.task_state"
    )
    .then(results => {
      res.json(results);
    });
});

app.post("/todo", (req, res) => {
  return knex("todo_tasks")
    .insert({
      task: req.body.task,
      task_state: req.body.task_state,
      user_id: 1
    })
    .then(() => res.json({ msg: "todo task!" }))
    .catch(function() {
      res.send({ error: "err" });
    });
});

app.delete("/todo", (req, res) => {
  return knex("todo_tasks")
    .where("todo_tasks.id", req.body.key)
    .del()
    .then(results => {
      res.json(results);
    });
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
