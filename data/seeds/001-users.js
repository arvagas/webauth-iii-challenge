const bcrypt = require('bcryptjs')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'admin', password: `${bcrypt.hashSync('password', 12)}`, department: 'executive office'},
        {username: 'peanut', password: `${bcrypt.hashSync('butter', 12)}`, department: 'agriculture'},
        {username: 'chicken', password: `${bcrypt.hashSync('sandwich', 12)}`, department: 'agriculture'},
        {username: 'nuclear', password: `${bcrypt.hashSync('bomb', 12)}`, department: 'defense'},
        {username: 'bear', password: `${bcrypt.hashSync('arms', 12)}`, department: 'defense'},
        {username: 'judge', password: `${bcrypt.hashSync('judy', 12)}`, department: 'justice'},
        {username: 'carne', password: `${bcrypt.hashSync('asada', 12)}`, department: 'agriculture'},
        {username: 'caesar', password: `${bcrypt.hashSync('salad', 12)}`, department: 'agriculture'},
        {username: 'undercover', password: `${bcrypt.hashSync('agent', 12)}`, department: 'homeland security'},
        {username: 'dolladolla', password: `${bcrypt.hashSync('billsyall', 12)}`, department: 'treasury'},
      ])
    })
}
