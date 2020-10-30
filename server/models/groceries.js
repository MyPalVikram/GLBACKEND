const db = require('../db/connection.js');

const getGroceries = (query, callback) => {
  db.connection.query(query, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

module.exports.getGroceries = getGroceries;