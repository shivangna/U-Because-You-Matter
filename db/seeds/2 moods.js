exports.seed = function(knex, Promise) {
  return knex("moods")
    .del()
    .then(function() {
      return Promise.all([
        knex("moods").insert({
          mood: "happy",
          mood_date: "2019-05-20",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "happy",
          mood_date: "2019-05-19",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "happy",
          mood_date: "2019-05-18",
          user_id: 1
        }),
        knex("moods").insert({
          mood: "sad",
          mood_date: "2019-05-18",
          user_id: 2
        }),
        knex("moods").insert({
          mood: "neutral",
          mood_date: "2019-05-17",
          user_id: 2
        }),
        knex("moods").insert({
          mood: "happy",
          mood_date: "2019-05-15",
          user_id: 2
        }),
        knex("moods").insert({
          mood: "neutral",
          mood_date: "2019-05-08",
          user_id: 3
        }),
        knex("moods").insert({
          mood: "neutral",
          mood_date: "2019-05-01",
          user_id: 3
        }),
        knex("moods").insert({
          mood: "sad",
          mood_date: "2019-05-05",
          user_id: 3
        })
      ]);
    });
};
