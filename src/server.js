const express = require('express');
const api = express();
const port = 3000;

const routes = require('./router');

api.use(express.json());
api.use(routes);

// api.get('/', (req, res) => {
//     res.send('Hello World!');
// });

api.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});