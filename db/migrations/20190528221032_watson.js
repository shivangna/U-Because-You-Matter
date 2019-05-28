exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table("journal_entries", function(table) {
      table.text("emotion");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table("journal_entries", function(table) {
      table.dropColumn("emotion");
    })
  ]);
};
