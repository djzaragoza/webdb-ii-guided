// Update with your config settings.
// be sure you are in the root of your repo! or use --knexfile ...


module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db3'
    },

    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};