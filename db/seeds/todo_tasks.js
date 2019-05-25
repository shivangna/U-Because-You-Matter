exports.seed = function(knex, Promise) {
  return knex("todo_tasks")
    .del()
    .then(function() {
      return Promise.all([
        knex("todo_tasks").insert({
          title: "Cleaning 1",
          task: "Clean house",
          task_state: "complete",
          user_id: 1
        }),
        knex("todo_tasks").insert({
          title: "Cleaning 2",
          task: "Clean kitchen",
          task_state: "incomplete",
          user_id: 1
        }),
        knex("todo_tasks").insert({
          title: "Cleaning 3",
          task: "Clean backyard",
          task_state: "incomplete",
          user_id: 1
        })
      ]);
    });
};
