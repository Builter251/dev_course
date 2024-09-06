const express = require('express');
const app = express();

app.use(express.json());

const cors = require('cors');
app.use(cors());

const index = require('./router/index');
app.use('/', index);

app.listen(4000, () => console.log('Server is running on port 4000'));
