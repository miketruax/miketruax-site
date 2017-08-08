let Recipe = require('../models/recipe');
import Job from '../models/job';

export default  (app, router) => {
        router.get('/recipe/', (req, res, next) => {
            Recipe.get(res);
        });

        router.get('/recipe/:id/', (req, res, next) => {
            Recipe.cat(req.params.id, res);
        });

        router.get('/job/', (req, res, next) => {
            Job.get(res);
        });
        router.get('/ping', (req, res, next)=>{
          res.send({success: true})
        })


}
