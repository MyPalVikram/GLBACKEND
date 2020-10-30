const dummyData = require('../dummyData.js');
const db = require('../db/connection.js');
const model = require('../models/groceries.js');

module.exports = {
get: (req, res) => {
  model.getGroceries('SELECT * FROM groceries', (err, data) => {
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.status(200);
      res.json(data);
    }
  });
}
}