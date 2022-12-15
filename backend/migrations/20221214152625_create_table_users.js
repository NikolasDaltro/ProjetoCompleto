
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table =>{
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('email').notNullable().unique()
        table.string('password').notNullable()
        table.boolean('admin').notNullable().defaultTo(false)
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
