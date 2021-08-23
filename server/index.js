require('dotenv').config();
const express = require('express');

const app = express();

const port = process.env.API_PORT || 3001;

const router = require('./routes');
app.use(express.json());
app.use('/qa', router);
app.get('/loaderio-67f67269d09940694a30b8462730e4d9/', (req, res) => {
  res.send('loaderio-67f67269d09940694a30b8462730e4d9');
});
// app.get('/', (req, res) => res.json({ message: 'Hiiii' }));

app.listen(port, () => console.log(`Listening on port ${port}!`));
