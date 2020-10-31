const db = require('../db/connection.js');

module.exports.getGroceries = (query, callback) => {
  db.connection.query(query, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}