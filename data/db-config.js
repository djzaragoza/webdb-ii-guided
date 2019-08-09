// get knex

const knex = require('knex');

// get a configuration object out of knexfile.js
const config = require('../knexfile.js');

//create a database object/method using knex, passing in
//our development config object (from the knextfile.js file)
const db = knex(config.development);

//export the database obeject/method ... otherwise, why even?

module.exports = db;