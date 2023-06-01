const express = require('express');

const app = express();
const port = 22222
app.listen(port, () => {
  console.log(`Application Started at ${port}`)
});

module.exports.app = app;