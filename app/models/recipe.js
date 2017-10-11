import {acquire} from '../connection';


      function get(res) {
        acquire((con) => {
          con.query('select * from recipes', function (err, result) {
            con.release();
            res.send(result);
          });
        })
      };

    function cat(id, res) {
      acquire((con) => {
            con.query('select * from recipes where category_ID = ?', [id], function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };


    function create(recipe, res) {
      acquire((con) => {
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

    function update(recipe, res) {
      acquire((con) => {
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

    function del(id, res) {
      acquire((con) => {
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

    export {get, cat, create, update, del}
