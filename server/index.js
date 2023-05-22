const sql = require("msnodesqlv8");
var config={
    server: "DESKTOP-E3PR7GQ\SQLEXPRESS",
    database: "gohackathon",
    driver: "msnodesqlv8",
    options:{
        trustedConnection: true
    }
};

sql.ConnectionError(config,function(err){
    if(err){
        console.log("error");
    }
    var request = new sql.Request();
    request.query("select * from coupons", function(err, recordSet){
        if(err){
            console.log(err);
        }else{
            console.log(recordSet);
        }
    });
});