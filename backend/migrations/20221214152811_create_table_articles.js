
exports.up = function(knex, Promise) {
    return knex.schema.createTable('article', table =>{
        table.increments('id').primary()
        table.string('name').notNUll()
        table.string('description', 1000).notNUll()
        table.string('imageUrl', 1000)
        table.binary('content').notNUll()
        table.integer('userId').references('id')
            .inTable('users').notNUll()
        table.integer('categoryId').references('id')
        .inTable('categories').notNUll()
    })

};

exports.down = function(knex, Promise) {
     return knex.schema.dropTable('articles')
};
