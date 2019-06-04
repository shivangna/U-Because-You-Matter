exports.seed = function(knex, Promise) {
  return knex("moods")
    .del()
    .then(function() {
      return Promise.all([
        knex("moods").insert({
          mood: "ReallyGreat",
          mood_date: "2019-05-24",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "ReallyGreat",
          mood_date: "2019-05-23",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "ReallyGreat",
          mood_date: "2019-05-21",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "Good",
          mood_date: "2019-05-20",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "Good",
          mood_date: "2019-05-19",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "Ok",
          mood_date: "2019-05-18",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "Bad",
          mood_date: "2019-05-17",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "VeryBad",
          mood_date: "2019-05-16",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "Worst",
          mood_date: "2019-05-15",
          user_id: 1
        })
      ]);
    });
};
