module.exports = app =>{
    var router = require('express').Router();
    const bookController = require('../controller/book.controller.js');
    
    router.get('/book',bookController.getAllData);
    router.get('/book/:bookId',bookController.getDataById);
    router.post('/book',bookController.postInssUpDate);
    router.delete('/book',bookController.deleteDatabyId);

    app.use('/api',router);
    
};