exports.seed = function(knex, Promise) {
  return knex("moods")
    .del()
    .then(function() {
      return Promise.all([
        knex("moods").insert({
          mood: "sadness",
          mood_date: "2019-01-01",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "sadness",
          mood_date: "2019-01-02",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "sadness",
          mood_date: "2019-01-05",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "sadness",
          mood_date: "2019-01-06",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "sadness",
          mood_date: "2019-01-07",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "disgust",
          mood_date: "2019-01-08",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "disgust",
          mood_date: "2019-01-09",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "disgust",
          mood_date: "2019-01-10",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "disgust",
          mood_date: "2019-01-11",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "disgust",
          mood_date: "2019-01-13",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "disgust",
          mood_date: "2019-01-14",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "disgust",
          mood_date: "2019-01-15",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "sadness",
          mood_date: "2019-01-17",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "sadness",
          mood_date: "2019-01-18",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "sadness",
          mood_date: "2019-01-20",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "sadness",
          mood_date: "2019-01-21",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "sadness",
          mood_date: "2019-01-25",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "sadness",
          mood_date: "2019-01-31",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "sadness",
          mood_date: "2019-02-01",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "disgust",
          mood_date: "2019-02-02",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "disgust",
          mood_date: "2019-02-03",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "disgust",
          mood_date: "2019-02-04",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "sadness",
          mood_date: "2019-02-05",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "sadness",
          mood_date: "2019-02-10",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-02-11",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "sadness",
          mood_date: "2019-02-12",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "fear",
          mood_date: "2019-02-13",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "sadness",
          mood_date: "2019-02-14",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "sadness",
          mood_date: "2019-02-15",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-02-21",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-02-22",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-02-24",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-02-25",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-02-26",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-03-02",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-03-04",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-03-05",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-03-06",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-03-14",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-03-14",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "fear",
          mood_date: "2019-03-15",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "fear",
          mood_date: "2019-03-16",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "fear",
          mood_date: "2019-03-19",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-03-21",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-03-22",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-03-25",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "fear",
          mood_date: "2019-03-27",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "fear",
          mood_date: "2019-03-28",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "fear",
          mood_date: "2019-03-29",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "fear",
          mood_date: "2019-03-30",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "fear",
          mood_date: "2019-03-31",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "fear",
          mood_date: "2019-04-01",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-04-02",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-04-03",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-04-04",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-04-05",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "fear",
          mood_date: "2019-04-08",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "disgust",
          mood_date: "2019-04-09",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "disgust",
          mood_date: "2019-04-10",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "disgust",
          mood_date: "2019-04-11",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "disgust",
          mood_date: "2019-04-12",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "disgust",
          mood_date: "2019-04-13",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "disgust",
          mood_date: "2019-04-14",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-04-15",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-04-16",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-04-17",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-04-18",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-04-18",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "fear",
          mood_date: "2019-04-20",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "fear",
          mood_date: "2019-04-21",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "anger",
          mood_date: "2019-04-22",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "anger",
          mood_date: "2019-04-23",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-04-24",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-04-25",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-04-26",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-04-27",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-04-28",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-05-01",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-05-03",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "fear",
          mood_date: "2019-05-06",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "fear",
          mood_date: "2019-05-07",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "fear",
          mood_date: "2019-05-08",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "fear",
          mood_date: "2019-05-09",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-05-14",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-05-15",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-05-16",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-05-17",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-05-20",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-05-21",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-05-22",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "anger",
          mood_date: "2019-05-25",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "anger",
          mood_date: "2019-05-26",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "anger",
          mood_date: "2019-05-27",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "fear",
          mood_date: "2019-05-28",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "fear",
          mood_date: "2019-05-29",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "fear",
          mood_date: "2019-05-30",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-05-31",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-06-01",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-06-02",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "joy",
          mood_date: "2019-06-03",
          user_id: 1
        })
      ]);
    });
};
