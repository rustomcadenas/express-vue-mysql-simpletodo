require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.port;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


require('./routes/routes')(app);

app.listen(port, () => {
    console.log(`App started at http://localhost:${port}`)
});