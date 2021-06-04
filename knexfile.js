module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost/metal'
  },
  production: {
    client: 'postgresql',
    connection: {
      connectionString: process.env.DATABASE_URL + '?ssl=true',
      ssl: {
        rejectUnauthorized: false,
      },
    },
  }
}
