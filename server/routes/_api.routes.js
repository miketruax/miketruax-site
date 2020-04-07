import {getRecipes, getCategories, createRecipe, updateRecipe, deleteRecipe} from '../models/recipe'
export default  (app, router) => {

  router.get('/recipe', (req, res, next) => {
    getRecipes(res);
  });

  //Removing functionality for create/update/destroy until login built
  router.post('/recipe', (req,res)=>{
    // createRecipe(req.body.recipe, res);
    res.send({'response' : 'Functionality NYI'})
  });

  router.get('/recipes/:id/', (req, res, next) => {
    // getCategories(req.params.id, res);
    res.send({'response' : 'Functionality NYI'})
  });

  router.post('/recipes/:id', (req, res) =>{
    //updateRecipe(req.params.id, req.body.recipe, res)
    res.send({'response' : 'Functionality NYI'})
  });

  router.delete('/recipes/:id', (req,res) =>{
    // deleteRecipe(req.params.id, res);
    res.send({'response' : 'Functionality NYI'})
  });

}
