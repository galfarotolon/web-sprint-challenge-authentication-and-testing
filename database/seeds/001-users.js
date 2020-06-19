
exports.seed = function (knex) {

  return knex('users').insert([

    { username: 'Guillermo', password: 123 }


  ]);

};
