const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('The internet is working again')
});

app.listen(port, () => {
  console.log(`Application is listening on http://localhost:${port}`)
});