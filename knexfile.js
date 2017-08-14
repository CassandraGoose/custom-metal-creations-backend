module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost/iblog'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
}
