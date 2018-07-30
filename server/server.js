const morgan = require('morgan');
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 8043;
const indexHtml = fs.readFileSync(path.join(__dirname, '..', 'dist', 'index.html'));

app.use(morgan('common'));
app.use('/', express.static(path.join(__dirname, '..', 'dist')));

app.get('*', (req, res) => res.type('html').send(indexHtml));

app.listen(PORT, () => console.log(`App listening on \x1b[1;20m${PORT}\x1b[m\n`));
