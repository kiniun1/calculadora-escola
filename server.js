const express = require('express');
const path = require('path');
const cors = require('cors');
const router = require('./interface/routes/api-post-route');
const app = express();

app.use(express.json());
app.use(cors({origin: 'http://localhost:8080'}));
app.use(router);
  
app.listen(3080, () => {
    console.log(`Server listening on the port::${3080}`);
});
module.exports = app;