
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table) {
    table.increments('id').primary();
    table.string('name');
    table.string('bio');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user')
};
