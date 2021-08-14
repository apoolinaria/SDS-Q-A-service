const express = require('express');

const app = express();

const port = 3001;
const router = require('./routes');
app.use(express.json());
app.use('/qa', router);

// app.get('/', (req, res) => res.json({ message: 'Hiiii' }));

app.listen(port, () => console.log(`Listening on port ${port}!`));
