const express = require('express');
// const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/",(req,res) =>{
    res.send('my name is Thanatthanan Unaoei');
})

app.listen(port,()=>{
    // console.log('Listening on port : '+ port);
    // debug('Listening on port : ' + port);
    console.log('Listening on port : '+ port);
})