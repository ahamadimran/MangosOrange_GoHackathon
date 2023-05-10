const express = require('express');
dboperation = require('./dboperation');
const cors = require('cors');
// const app = express();

// app.use(cors());
// app.use(express.json());
// app.get('/message', ( req, res) => {
//     res.json({message: "Hello from Server"});
// });

dboperation.getCoupons().then(res => {
    console.log(res);
});

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

