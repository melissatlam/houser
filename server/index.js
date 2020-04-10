require("dotenv").config();
const express = require('express');
const massive = require("massive");
const {getHouses, addHouse, removeHouse} = require('./controllers/controller');


const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;


massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
    })
    .then(dbInstance => {
        app.set("db", dbInstance);
      })
      .catch(err => console.log(err));

app.use(express.json());

app.get('/api/houses', getHouses);
app.post('/api/houses', addHouse);
app.delete('/api/houses/:id', removeHouse);

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on PORT ${SERVER_PORT}.`);
});


// const PORT = 5000

// app.listen(PORT, () => console.log(`Skynet is running on PORT ${PORT}`))