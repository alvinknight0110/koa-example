var router = require('koa-router')();
const controller = require('../controller/data');

router.prefix('/users');

router.get('/', function* (next) {
  this.body = 'this is a users response!';
});

router.get('/bar', function* (next) {
  this.body = 'this is a users/bar response!';
});

router.get('/data', controller.getData);

module.exports = router;
