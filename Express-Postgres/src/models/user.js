var knex = require('knex')(require('../../knexfile'));
var bookshelf = require('bookshelf')(knex);

const User = bookshelf.Model.extend({
  tableName: 'user'
});

module.exports = User;
