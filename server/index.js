const sql = require("msnodesqlv8");

const connectionString="server=DESKTOP-E3PR7GQ\SQLEXPRESS;Database=gohackathon;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

sql.connect(connectionString,function(err){
    if(err){
        console.log(err);
    }
    var request = new sql.Request();
    request.query('select * from coupons', function(err,recordSet){
        if(err){
            console.log(err);
        }else{
            res.send(recordSet);
        }
    });
})