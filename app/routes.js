import apiRoutes from './routes/_api.routes.js';

export default (app, router, passport) => {


  router.use((req, res, next) => {
    next();
  });


  apiRoutes(app, router);

  //applies api routes
  app.use('/api', router);

  //ALL requests get routed through to index.html to ensure app is used
  app.get('*', (req, res) => {

    res.sendFile('/dist/index.html', {root: __dirname + "/../"});
  });
};
