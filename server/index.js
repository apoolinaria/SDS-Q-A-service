// express server here
const express = require('express');

const app = express();

const port = 3001;

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Hiiii' }));

app.listen(port, () => console.log(`Listening on port ${port}!`));
