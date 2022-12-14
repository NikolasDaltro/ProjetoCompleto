
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table =>{
        table.increments('id').primmary()
        table.string('name').noNull()
        table.string('email').noNull().unique()
        table.string('password').noNull()
        table.boolean('admin').noNull().defaultTo(false)
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
