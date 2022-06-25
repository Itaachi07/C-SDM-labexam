const mysql = require('mysql')

const pool = mysql.createPool({
    host: 'empdb',

    user:'root',
    password:'manager',
    database:'EmpDB',
    port:'3306',
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0,
})

module.exports=pool