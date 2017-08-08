let conn = require('../connection');
export default ()=>{
  conn.init();
    this.get = function (res) {
        conn.pool.getConnection(function (err, con) {
          if(err){
            res.send(err);
            return;
          }
            con.query('select * from recipes', function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.cat = function (id, res) {
        conn.acquire(function (err, con) {
          if(err){
            console.log(err);
            return;
          }
            con.query('select * from recipes where category_ID = ?', [id], function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };


    this.create = function (recipe, res) {
        conn.acquire(function (err, con) {
          if(err){
            console.log(err);
            return;
          }
            con.query('insert into recipes set ?', recipe, function (err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'Recipe creation failed'});
                } else {
                    res.send({status: 0, message: 'Recipe created successfully'});
                }
            });
        });
    };

    this.update = function (recipe, res) {
        conn.acquire(function (err, con) {
          if(err){
            console.log(err);
            return;
          }
            con.query('update recipe set ? where id = ?', [recipe, recipe.id], function (err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'recipe update failed'});
                } else {
                    res.send({status: 0, message: 'recipe updated successfully'});
                }
            });
        });
    };

    this.delete = function (id, res) {
        conn.acquire(function (err, con) {
            con.query('delete from recipe where id = ?', [id], function (err, result) {
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
