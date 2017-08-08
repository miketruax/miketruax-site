import mysql from 'mysql';

export default () => {
  this.pool = null;

    this.init = function () {
        this.pool = mysql.createPool({
          debug: true,
            connectionLimit: 10,
            host: 'miketruax.com',
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

