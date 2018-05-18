module.exports = require('knex')(require('./knexfile')[process.env.ENVIRONMENT || 'development'])
