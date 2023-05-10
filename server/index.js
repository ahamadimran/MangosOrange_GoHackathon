const sql = require("msnodesqlv8");

const connectionString = "server=DESKTOP-E3PR7GQ\SQLEXPRESS;Database=gohackathon;Trusted_Connection=Yes;Driver={msnodesqlv8}";
    
const query = "select * from dbo.registration";

sql.query(connectionString, query, (err, rows) => {
    console.log(rows);
});