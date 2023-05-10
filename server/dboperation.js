const config = require('./dbconfig');

const sql = require('msnodesqlv8');

const getCoupons = async() => {
    try {
        let pool = await sql.connect(config);
        let coupons = pool.request().query("SELECT * from coupons");
        console.log(coupons);
        return coupons;
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {
    getCoupons
}