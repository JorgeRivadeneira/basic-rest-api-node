const express = require('express');
const routes = require('./routes/rest');

const app = express();
require('dotenv').config();

app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`Server is up in port:  ${process.env.PORT}` );
});