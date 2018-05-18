var environment = process.env.DATABASE_URL || 'development';
console.log(environment)
var knexConfig = require('../knexfile')
var config = knexConfig[environment];
var knex = require('knex');
var knexConnection = knex(config);


module.exports = knexConnection;
