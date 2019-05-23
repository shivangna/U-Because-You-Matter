exports.seed = function(knex, Promise) {
  return knex("users")
    .del()
    .then(function() {
      return Promise.all([
        knex("users").insert({
          id: 1,
          first_name: "Mike",
          last_name: "Witk",
          email: "mike@mike.com",
          password: "1234"
        }),
        knex("users").insert({
          id: 2,
          first_name: "Shivangna",
          last_name: "Kaistha",
          email: "shiv@shiv.com",
          password: "3456789"
        }),
        knex("users").insert({
          id: 3,
          first_name: "Jocelyne",
          last_name: "El Tahan",
          email: "jo@jo.com",
          password: "999"
        })
      ]);
    });
};
