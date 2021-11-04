const router = require('express').Router();
// var mysql = require('mysql');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;
