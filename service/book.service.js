const mysql = require('../connection/db.js');


const getAllData = async(result) => {
    try{
        var ssql ="CALL USP_Book_Crud_M(?, ?);";

        const RetData = await mysql.query(ssql,
        [
            'SELECTALL',
            '{}'
        ],
        (err,resp)=>{
            if(err){
                result(err.sqlMessage);
                return;
            }
            result(resp[0]);
        });
    }catch(err){
       return "error" + err;
    }
};

const getDataById = async(bookId,result) => {
    try{
        let bodyContent ='{"Data": {"BookId": '+ bookId +'}}';
        var ssql ="CALL USP_Book_Crud_M(?, ?);";

        const RetData = await mysql.query(ssql,
        [
            'SELECTBYID',
            bodyContent
            
        ],
        (err,resp)=>{
            if(err){
                result(err.sqlMessage);
                return;
            }
            console.log("bodyContent:", bodyContent);
        console.log("resp:", resp);
            result(resp[0]);
        });
       
        console.log(RetData);
    } catch(err){
       return "error" + err;
    }
};

const postInssUpDate = async (reqbody,result) => {
    try{
        var ssql ="CALL USP_Book_Crud_M(?,?);";  //add or update book data
        const RetData = await mysql.query(ssql,
        [
            reqbody.ActionFlag,
            JSON.stringify(reqbody)
        ],
        (err,resp)=>{
            if(err){
                result(err.sqlMessage);
                return;
            }
            result(resp[0]);
        });
        } catch (err){
            return "error" + err;
        }
};

const deleteDatabyId =async (reqbody,result) => {
    try{
        var ssql ="CALL USP_Book_Crud_M(?,?);";
        const RetData = await mysql.query(ssql,
        [
            reqbody.ActionFlag,
            JSON.stringify(reqbody)
        ],
        (err,resp)=>{
            if(err){
                result(err.sqlMessage);
                return;
            }
            result(resp[0]);
        });
        }
            catch(err){
                return "error" + err;
        }
};

module.exports = {
    getAllData: getAllData,
    getDataById: getDataById,
    postInssUpDate:postInssUpDate,
    deleteDatabyId: deleteDatabyId
}