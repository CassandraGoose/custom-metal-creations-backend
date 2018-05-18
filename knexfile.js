module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost/metal'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
}
