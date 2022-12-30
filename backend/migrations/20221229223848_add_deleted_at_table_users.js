
exports.up = function(knex) {
  return knex.schema.alterTable('users', table =>{
    table.timestamp('deletedAt')
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('users', table =>{
    table.dropColumn('deletedAt')
  })
};
