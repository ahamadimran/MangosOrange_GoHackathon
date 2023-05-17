const sql = require("msnodesqlv8");

const connectionString = "server=DESKTOP-E3PR7GQ\SQLEXPRESS;Database=gohackathon;Trusted_Connection=Yes;Driver={msnodesqlv8}";
    
const query = "SELECT * from dbo.coupons";

sql.query(connectionString, query, (err, recordSet) => {
     console.log(err);
 });