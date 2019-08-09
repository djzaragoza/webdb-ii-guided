module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './produce.db3'
        },
        useNullAsDefault: true
    };
};