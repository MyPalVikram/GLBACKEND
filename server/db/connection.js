var mysql = require('mysql');
var connection = mysql.createConnection({
  user: 'root',
  password: 'Economy57',
  database: 'groceries'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT 1', function (error, results, fields) {
  if (error) throw error;
});

module.exports.connection = connection;