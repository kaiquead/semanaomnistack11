
//usado para criar a tabela
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  })
};

//caso de algum erro na criacao da tabela, especifico o que deverá ser feito, no caso, será excluida
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
