exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("journal_entries")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("journal_entries").insert([
        {
          journal_entry: "I like apples and oranges",
          journal_date: "2019-05-24",
          user_id: 1,
          emotion:
            '{"joy": 0.90,"fear": 0.433691,"disgust": 0.0868,"anger": 0.163999,"sadness": 0.127595}'
        },
        {
          journal_entry: "My day was not very great!",
          journal_date: "2019-05-23",
          user_id: 1,
          emotion:
            '{"joy": 0.66739,"fear": 0.90,"disgust": 0.015399,"anger": 0.036355,"sadness": 0.24077}'
        },
        {
          journal_entry: "Some days I don't think I can make it",
          journal_date: "2019-05-22",
          user_id: 1,
          emotion:
            '{"joy": 0.673682,"fear": 0.060896,"disgust": 0.90,"anger": 0.051862,"sadness": 0.211044}'
        },
        {
          journal_entry: "The class today was very interesting",
          journal_date: "2019-05-21",
          user_id: 1,
          emotion:
            '{"joy": 0.691169,"fear": 0.055615,"disgust": 0.007559,"anger": 0.90,"sadness": 0.18642}'
        },
        {
          journal_entry: "We should contribute more to our community",
          journal_date: "2019-05-20",
          user_id: 1,
          emotion:
            '{"joy":0.408229,"fear": 0.040541,"disgust": 0.029022,"anger": 0.075862,"sadness": 0.90}'
        },
        {
          journal_entry: "Today was the day I lost part of me",
          journal_date: "2019-05-19",
          user_id: 1,
          emotion:
            '{"joy": 0.90,"fear": 0.16923,"disgust": 0.038923,"anger": 0.104142,"sadness": 0.767931}'
        },
        {
          journal_entry:
            "Today I heard a joke about programming and it was very funny",
          journal_date: "2019-05-25",
          user_id: 1,
          emotion:
            '{"joy": 0.632835,"fear": 0.90,"disgust": 0.199849,"anger": 0.113228,"sadness": 0.06328}'
        },
        {
          journal_entry: "Some days you just want to vanish from this planet",
          journal_date: "2019-05-26",
          user_id: 1,
          emotion:
            '{"joy": 0.335928,"fear": 0.098959,"disgust": 0.90,"anger": 0.187585,"sadness": 0.137999}'
        },
        {
          journal_entry: "I can do it. One step at a time",
          journal_date: "2019-05-27",
          user_id: 1,
          emotion:
            '{"joy": 0.198108,"fear": 0.169026,"disgust": 0.046386,"anger": 0.90,"sadness": 0.281906}'
        },
        {
          journal_entry: "I am going to miss this place",
          journal_date: "2019-05-28",
          user_id: 1,
          emotion:
            '{"joy": 0.019634,"fear": 0.393573,"disgust": 0.01356,"anger": 0.06648,"sadness": 0.90}'
        },
        {
          journal_entry: "Am I ready to go outside and face the world?",
          journal_date: "2019-05-29",
          user_id: 1,
          emotion:
            '{"joy": 0.90,"fear": 0.342764,"disgust": 0.141509,"anger": 0.046709,"sadness": 0.225907}'
        },
        {
          journal_entry: "Every day is a new chance to start over",
          journal_date: "2019-05-30",
          user_id: 1,
          emotion:
            '{"joy": 0.703171,"fear": 0.90,"disgust": 0.005633,"anger": 0.031278,"sadness": 0.169099}'
        }
        // {
        //   journal_entry:
        //     "I really learned a lot in here and will be forever grateful for them ",
        //   journal_date: "2019-05-31",
        //   user_id: 1,
        //   emotion:
        //     '{"joy": 0.851836,"fear": 0.018314,"disgust": 0.015063,"anger": 0.023458,"sadness": 0.097654}'
        // }
      ]);
    });
};
