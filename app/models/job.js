import {Connection} from '../connection';
let conn = new Connection();

export default () => {
    this.get = function (res) {
        conn.acquire(function (err, con) {
            con.query('select * from jobs', function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };


    this.create = function (job, res) {
        conn.acquire(function (err, con) {
            con.query('insert into jobs set ?', job, function (err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'Job creation failed'});
                } else {
                    res.send({status: 0, message: 'Job created successfully'});
                }
            });
        });
    };

    this.update = function (job, res) {
        conn.acquire(function (err, con) {
            con.query('update jobs set ? where id = ?', [job, job.id], function (err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'Job update failed'});
                } else {
                    res.send({status: 0, message: 'Job updated successfully'});
                }
            });
        });
    };

    this.delete = function (id, res) {
        conn.acquire(function (err, con) {
            con.query('delete from jobs where id = ?', [id], function (err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'Failed to delete'});
                } else {
                    res.send({status: 0, message: 'Deleted successfully'});
                }
            });
        });
    };
}
