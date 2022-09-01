const { selectQuery } = require('../utils/mysql.js');

const getData = function* (next) {
    selectQuery('select * from swagger_transaction_log', null).then((data) => {


        console.log(data);
    });
    this.body = 'test';
}

module.exports = {
    getData
}