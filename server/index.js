const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();
const morgan = require("morgan");

const PORT = 3030;
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../client/dist")));


app.listen(PORT, (error) => {
    if(!error){
        console.log(`Server is listening on ${PORT}`)
    } else {
        console.log('not working')
    }
});