exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_table')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users_table').insert([
        {
          first_name: 'Jayne',
          last_name: 'Carmichael Norrie',
          email: 'jayne@musicisourforte.co.uk',
          password: 'chico',
          user_role_id: 2,
        },
        {
          first_name: 'Liam',
          last_name: 'Sutton',
          email: 'liam@google.com',
          password: 'liam',
          user_role_id: 2,
        },
        {
          first_name: 'Funmi',
          last_name: 'Talabi',
          email: 'funmi@google.com',
          password: 'funmi',
          user_role_id: 2,
        },
        {
          first_name: 'Bob',
          last_name: 'Smith',
          email: 'bob@google.com',
          password: 'bob',
          user_role_id: 1,
        },
        {
          first_name: 'Lizzo',
          last_name: 'Smith',
          email: 'lizzo@google.com',
          password: 'lizzo',
          user_role_id: 1,
        },
      ]);
    });
};