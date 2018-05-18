var environment = process.env.ENVIRONMENT || 'development';
console.log(environment)
var knexConfig = require('../knexfile')
var config = knexConfig[environment];
var knex = require('knex');
var knexConnection = knex(config);


module.exports = knexConnection;
