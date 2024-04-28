const bookService = require('../service/book.service');

//get all data
const getAllData =  (req, res) => {
    return bookService.getAllData((resData)=>{
        let restMsg = JSON.parse(resData[0].RetnData);

        if(!restMsg){
            res.satus(500).json({
                'success':false,
                'code': 500,
                'data': restMsg
            });
        }else{
            res.status(200).json({
                'success':true,
                'code': 200,
                'data': restMsg
            });
        }
    });
};

//get data by id
const getDataById =  (req, res) => {
    return bookService.getDataById(req.params.bookId,(resData)=>{
        let retMsg = JSON.parse(resData[0].RetnData);
        
        if(!retMsg){
            res.satus(500).json({
                'success':false,
                'code': 500,
                'data': retMsg
            });
        }else{
            res.status(200).json({
                'success':true,
                'code': 200,
                'data': retMsg
            });
        }
    });
};

//update data or insert
const postInssUpDate =  (req, res) => {
    return bookService.postInssUpDate(req.body,(resData)=>{
        let restMsg = JSON.parse(resData[0].RetnData);
        if(!restMsg){
            res.satus(500).json({
                'success':false,
                'code': 500,
                'data': restMsg
            });
        }else{
            res.status(200).json({
                'success':true,
                'code': 200,
                'data': restMsg
            });
        }
    });
};

//delete data by id
const deleteDatabyId =  (req, res) => {
    return bookService.deleteDatabyId(req.body,(resData)=>{
        let restMsg = JSON.parse(resData[0].RetnData);
        if(!restMsg){
            res.satus(500).json({
                'success':false,
                'code': 500,
                'data': restMsg
            });
        }else{
            res.status(200).json({
                'success':true,
                'code': 200,
                'data': restMsg
            });
        }
    });
};

module.exports = {
    getAllData: getAllData,
    getDataById: getDataById,
    postInssUpDate:postInssUpDate,
    deleteDatabyId: deleteDatabyId
}