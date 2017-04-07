import mysql from 'mysql';

export class Connection {
    pool = null;

    init = function () {
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: 'localhost',
          user: process.env.user,
          password: process.env.password,
          database: process.env.database
        });
    };

    acquire = function (callback) {
        this.pool.getConnection(function (err, connection) {
            callback(err, connection);
        });
    };

}
