import mysql from 'mysql';

let debugFlag = process.env.NODE_ENV === 'development' || 'test' ? true : false;
let pool = mysql.createPool({
    debug: debugFlag,
    connectionLimit: 10,
    host: 'localhost',
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
  });

function acquire(callback){
  pool.getConnection(function(err, connection){
    if(err){
      res.send(err);
      return;
    }
    callback(connection);
  })
}

export {pool, acquire};

