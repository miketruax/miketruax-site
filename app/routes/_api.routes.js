import Recipe from '../models/recipe';
import Job from '../models/job';

export default  (app, router) => {
        router.get('/recipe/', function (req, res, next) {
            Recipe.get(res);
        });

        router.get('/recipe/:id/', function (req, res, next) {
            Recipe.cat(req.params.id, res);
        });

        router.get('/job/', function (req, res, next) {
            Job.get(res);
        });


}
