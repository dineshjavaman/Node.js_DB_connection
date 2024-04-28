//this is my first js file for api
const express = require('express');
const app =express();
const bodyparser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
//set cors
var cors = require('cors');
app.use(cors());

//simple route
app.get('/',(req,res)=>{
    res.json({
        message:'welcome to app'
    });

});

//start 
require('./routes/book.routes')(app);

//set port, for listen for request
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});