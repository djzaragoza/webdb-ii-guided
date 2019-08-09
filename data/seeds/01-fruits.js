//be sure to modify knexfile.js to tell knex where seed files are stored.
//create a seed file: knex seed:make <filename>

exports.seed = function(knex) {
    //deletes ALL existing entries, *and* resets the ID (because we are 
    //using ".truncate()", not ".del()")
    return knex('fruits').truncate()
    .then(function () {
        //inserts seed entries
        return knex('fruits').insert([
            { name: 'dragon fruit', avgWeightOz: 16.7, color: 'red' },
            { name: 'durian', avgWeightOz: 52.9, delicious: false, color: 'yellow' },
            { name: 'rambutan', avgWeightOz: 1.1, color: 'pink' },
            { name: 'lingonberry', avgWeightOz: 0.01, color: 'red' },
            { name: 'golden gooseberries', avgWeightOz: 0.02, delicious: false, color: 'yellow' }
        ]);
    });
};