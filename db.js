module.exports = require('knex')(require('./knexfile')[process.env.DATABASE_URL || 'development'])
