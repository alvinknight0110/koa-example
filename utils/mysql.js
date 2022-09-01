const Sequelize = require("sequelize")
const config = require('../config');
const db_host = config.mysql.host;
const db_port = config.mysql.port;
const database = config.mysql.db;
const username = config.mysql.user;
const password = config.mysql.pwd;

const sequelize = new Sequelize(database, username, password, {
    host: db_host,
    port: db_port,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: console.log,
})


const selectQuery = async function (sql, params, transaction = null) {
    const a = await sequelize.query(
        sql,
        {
            replacements: params,
            type: Sequelize.QueryTypes.SELECT,
            transaction: transaction
        }
    );
    return a
}


const updateQuery = async function (sql, params, transaction = null) {
    console.log("params: ", params)
    const a = await sequelize.query(
        sql,
        {
            replacements: params,
            type: Sequelize.QueryTypes.UPDATE,
            transaction: transaction,
        }
    );
    return a
}

module.exports = {
    "sequelize": sequelize,
    selectQuery: selectQuery,
    updateQuery: updateQuery,
}
