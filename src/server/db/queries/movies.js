const knex = require('../connection');

function getAllUsers() {
  return knex('movies')
  .select('*');
}

function getSingleUsers(id) {
    return knex('movies')
    .select('*')
    .where({ id: id });
  }
  
function addUser(user) {
    return knex('movies')
    .insert(user)
    .returning('*');
  }

  function deleteUser(user) {
    return knex('movies')
    .del()
    .insert(user)
    .returning('*');
  }

  
module.exports = {
  getAllUsers,
  getSingleUsers,
  addUser,
  deleteUser
}
