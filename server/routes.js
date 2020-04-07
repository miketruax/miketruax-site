import apiRoutes from './routes/_api.routes.js';

export default (app, router) => {


  router.use((req, res, next) => {
    next();
  });


  apiRoutes(app, router);

  //applies api routes
  app.use('/api', router);

// Allows for angular routing to take precedent


};
