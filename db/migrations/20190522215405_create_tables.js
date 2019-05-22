
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users', function (table) {
            table.increments();
            table.varchar('first_name', 50);
            table.varchar('last_name', 50);
            table.varchar('email', 50);
            table.varchar('password', 50);
        }),
        knex.schema.createTable('journal_entries', function (table) {
            table.increments();
            table.text('journal_entry');
            table.date('journal_date');
            table.integer('user_id');
            table.foreign('user_id').references('users.id');
        }),
        knex.schema.createTable('moods', function (table) {
            table.increments();
            table.varchar('mood', 50);
            table.date('mood_date');
            table.integer('user_id');
            table.foreign('user_id').references('users.id');
        }),        
        knex.schema.createTable('todo_tasks', function (table) {
            table.increments();
            table.text('title');
            table.text('task');
            table.varchar('task_state', 50);
            table.integer('user_id');
            table.foreign('user_id').references('users.id');
        }),  
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('users'),
        knex.schema.dropTable('journal_entries'),
        knex.schema.dropTable('moods'),
        knex.schema.dropTable('todo_tasks')
    ])
};
