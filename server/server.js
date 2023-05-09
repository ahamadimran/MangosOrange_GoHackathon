const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.get('/message', ( req, res) => {
    res.json({message: "Hello from Server"});
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});

const sql = require("mssql/msnodesqlv8");
var config = {
    server: "DESKTOP-E3PR7GQ\SQLEXPRESS",
    database: "gohackathon",
    driver: "msnodesqlv8",
    package:{
        trustedConnection: true
    }
}

sql.connect(config, function(error){
    if(error)console.log(error);
    var request = new sql.Request();
    request.query("select * from dbo.Registration", function(error, records){
        if(error)console.log(error);
        else console.log(records);
    })
})