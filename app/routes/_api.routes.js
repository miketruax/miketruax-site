import {get} from '../models/recipe'
export default  (app, router) => {

        router.get('/recipe', (req, res, next) => {
          get(res);
          // res.send([
          //   {
          //     "id": 1,
          //     "name": "General Tsofu",
          //     "image": "generaltsofu.png",
          //     "recipeLink": "http://appetiteforchina.com/recipes/general-tsos-chicken/",
          //     "results": "First and foremost, my wife and I love food puns (also non-food puns) so I make no apologies for the name of this. This all started when we wanted to have the equivalent of General Chicken without the chicken. We could not be happier with the results. We tried a couple other recipes first but settled on this one as the sauce made it that much better.",
          //     "changes": "We decided to use rice vinegar in lieu of the rice wine and also vegetable broth instead of the chicken broth. If you're using tofu instead of the chicken like us you will want to make sure that the tofu has all extra moisture removed prior to frying it. We also highly recommend cooking some udon in the pan with the sauce and tofu for something extra.",
          //     "credits": "Recipe from Appetite for China",
          //     "category_ID": 3
          //   },
          //   {
          //     "id": 2,
          //     "name": "Chocolate Babka",
          //     "image": "chocolatebabka.png",
          //     "recipeLink": "http://www.epicurious.com/recipes/food/views/chocolate-babka-236707",
          //     "results": "This was my first ever attempt at a true dessert bread. I told myself: 'Mike, give it a shot! What's the worst that could happen?' Well about six hours (including rising time) later I ended up with two loaves that my wife and I tried to eat all in one fell swoop. The recipe that I followed was fairly straight forward but there were a couple things I plan on doing differently the next time I try it.",
          //     "changes": "One of my biggest complaints with this was the lack of uniformity in the chocolate throughout. Going back again I almost feel like it would work better with cocoa powder to guarantee the even spread. Or dare I say... Nutella?",
          //     "credits": "Recipe from Epicurious",
          //     "category_ID": 1
          //   },
          //   {
          //     "id": 5,
          //     "name": "Bearscuits",
          //     "image": "bearscuits.png",
          //     "recipeLink": "http://www.foodnetwork.com/recipes/alton-brown/southern-biscuits-recipe.html",
          //     "results": "If there's one thing I love more than just about anything it's bears. A close second is biscuits. This was my wife's idea to combine the two. We've tried this several different ways but the best one so far was basically Alton Browns recipe for buttermilk biscuits. ",
          //     "changes": "The recipe by itself is perfect in my opinion. If you DO want to try something different I would recommend making them vegan. Just go full vegetable shortening and use almond milk with lemon juice in lieu of buttermilk. Still really good!",
          //     "credits": "Recipe from Food Network by Alton Brown",
          //     "category_ID": 1
          //   },
          //   {
          //     "id": 6,
          //     "name": "Chocolate Pie",
          //     "image": "chocolatepie.png",
          //     "recipeLink": "http://www.food.com/recipe/homemade-pudding-from-scratch-454943",
          //     "results": "This is probably the easiest pie there is to make. Bake a pie crust (my preference would be homemade) and then make a box of pudding and pour it in and cool! Now granted that is easy but it's also delicious. This brings me back to Thanksgiving as a kid when my mom would make these and pumpkin pies.",
          //     "changes": "It's super easy and a really good starter for a pie since you can focus 100% on the crust. If you're feeling super adventurous make homemade pudding for it. I've included a recipe link below!",
          //     "credits": "Homemade pudding recipe from Food.com",
          //     "category_ID": 2
          //   },
          //   {
          //     "id": 9,
          //     "name": "Strawberry Pie",
          //     "image": "strawberrypie.png",
          //     "recipeLink": "http://www.tasteofhome.com/recipes/easy-fresh-strawberry-pie",
          //     "results": "I went on a pie making bender one summer and this is one of the things I made. It didn't look super pretty but it was delicious. You can use frozen berries if you want but nothing beats fresh strawberries and then homemade whipped cream to top it.",
          //     "changes": "Definitely try your strawberries and cut down the sugar as needed. You might not need 100% of it unless you have a sweet tooth.",
          //     "credits": "Base recipe from Taste of Home",
          //     "category_ID": 2
          //   },
          //   {
          //     "id": 10,
          //     "name": "Vegan Pumpkin Pie",
          //     "image": "veganpumpkinpie.png",
          //     "recipeLink": "http://minimalistbaker.com/vegan-gluten-free-pumpkin-pie/",
          //     "results": "I have a non-vegan pumpkin pie recipe as well but I'll take that secret to my grave. If I had to compare the two though, this is almost as good as my family recipe pie. One of the bonuses of truly good vegan cooking is that you don't even know it's vegan. This definitely falls into that category. It has all the flavors a pumpkin pie should have and you don't even know you're missing anything.",
          //     "changes": "The recipe in the link is also gluten-free but I've made it non-gluten free as well. The only major change is just the flour for the crust. You could also use a different crust recipe, just steer clear of butter or lard to keep it vegan.",
          //     "credits": "Recipe courtesy of Minimalist Baker",
          //     "category_ID": 2
          //   },
          //   {
          //     "id": 13,
          //     "name": "Pecan Rolls",
          //     "image": "pecanrolls.png",
          //     "recipeLink": "http://www.bettycrocker.com/recipes/caramel-pecan-sticky-rolls/4077c5ea-0aa4-4e72-815e-8d12aadbbe87",
          //     "results": "Confession time... I may or may not have made these and then ate half the pan shortly thereafter. These turned out super rich and delicious but almost a little too dense with flavor. Not in a bad way, more in the I can only eat half a pan before I have to stop way. So that's a good thing, yeah?",
          //     "changes": "I would almost suggest trying to make a half-batch or ensuring that you have plenty of friends/family around willing to help you eat these. Otherwise you'll end up feeling bad having eaten a whole pan all by yourself. They're just too good!",
          //     "credits": "Recipe from the always wonderful Betty Crocker",
          //     "category_ID": 2
          //   },
          //   {
          //     "id": 14,
          //     "name": "Pumpkin Maple Donuts",
          //     "image": "gfmapledonuts.png",
          //     "recipeLink": "http://grainchanger.com/gluten-free-pumpkin-spice-donuts/",
          //     "results": "Taste wise these turned out amazing. With the moist cake and super sweet icing you don't notice the lack of gluten or any odd flavor from a different flour blend. The only problem I had was that they turned out a little too moist. To the point that they were less cake donuts and more donut shaped cake.",
          //     "changes": "I'm not sure if there was anything I could have done to change the consistency of them. Possibly reduce some of the liquid ingredients the next time around. Even then, they were still delicious.",
          //     "credits": "Original recipe from Grain Changer",
          //     "category_ID": 2
          //   },
          //   {
          //     "id": 15,
          //     "name": "Gluten Free Pretzel",
          //     "image": "gfpretzel.png",
          //     "recipeLink": "http://www.kingarthurflour.com/recipes/gluten-free-soft-pretzels-recipe",
          //     "results": "There was a stint I went through where I tried making all sorts of gluten free things. Most of them worked out pretty well. This one kind of did. Flavor-wise it worked fine. It tasted like a pretzel is supposed to but it ran into the issue of being extra dense form the GF flour. It was also near impossible to keep together because it lacked.. well.. gluten.",
          //     "changes": "The biggest thing I would do differently is to honestly get better at boiled breads. I can't seem to make them work and not be weird or slightly soggy. (Looking at you attempted bagels).",
          //     "credits": "Recipe from King Arthur Flour but I adjusted the GF flour to what I had on hand at the time.",
          //     "category_ID": 4
          //   }
          // ])
        });

        router.get('/recipes/:id/', (req, res, next) => {
            // Recipe.cat(req.params.id, res);
            res.send({});
        });

        router.get('/ping', (req, res, next)=>{
          res.send({success: true})
        });

}
