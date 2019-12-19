exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('appointments')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('appointments').insert([
        { coach_id: 1, student_id: 1, topic_id: 1 },
        { coach_id: 3, student_id: 2, topic_id: 2 },
        { coach_id: 2, student_id: 1, topic_id: 3 },
        { coach_id: 1, student_id: 2, topic_id: 1 },
        { coach_id: 3, student_id: 2, topic_id: 1 },
        { coach_id: 2, student_id: 1, topic_id: 5 },
      ]);
    });
};