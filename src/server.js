const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(`${__dirname}/index.html`));

app.listen(port);