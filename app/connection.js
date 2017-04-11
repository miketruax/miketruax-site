import mysql from 'mysql';

function Connection(){
  this.pool = null;

    this.init = function () {
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: 'http://www.miketruax.com',
          user: process.env.user,
          password: process.env.password,
          database: process.env.database
        });
    };

    this.acquire = function (callback) {
        this.pool.getConnection(function (err, connection) {
            callback(err, connection);
        });
    };
}


module.exports = new Connection();
