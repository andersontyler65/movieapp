
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movie', (table) => {
    table.increments('id').primary()
    table.varchar('title').notNullable()
    table.varchar('year').notNullable()
    table.integer('director_id').notNullable()
      .references('id')
      .inTable('director')
      .onDelete('CASCADE')
      .index()
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('movie')

};
