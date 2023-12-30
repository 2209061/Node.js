var mysql = require ("mysql");

var DatabaseConnectionConfig={

    host:"localhost",
    user:"root",
    password:"",
    database:"student"



};

var con=mysql.createConnection(DatabaseConnectionConfig);

con.connect(function(error) {

    if (error) {
        console.log("Database connection failed");
    } else {
        console.log("Database Connected");
        InsertData(con);
    }
});
function InsertData (con){

    let SQLQuery="INSERT INTO `student_list`(`Name`, `Class`, `Age`) VALUES ('Nafiz','13','23')"
        con.query(SQLQuery,function(error){
            if (error){
                console.log ("Data INSERT Fail");

            }
            else{
                console.log("Data INSERT Success");

            }
        })



}