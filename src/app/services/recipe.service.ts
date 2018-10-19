import { Recipe } from "../recipes/recipes.model";
<<<<<<< HEAD
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { IngredientsService } from "./Ingredients.service";
=======
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
>>>>>>> origin/master

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
<<<<<<< HEAD
    constructor(private ingredientServ: IngredientsService){}
=======
>>>>>>> origin/master
    private recipes: Recipe[]=[
        new Recipe('Pizza','Pizza hawaiana',
        'https://images.firstwefeast.com/complex/images/fl_lossy,q_auto/v1/xh7g5sgtximbqev3plah/pizza-hut-vs-dominos',
        [new Ingredient("Tomatoes",7), new Ingredient("Pineaple",1), new Ingredient("Sausage",5)]),
        new Recipe('Tortas','Tortas Cubanas',
        'http://tortaslamichoacana.com/wp-content/uploads/2014/02/392A4389.jpg',
        [new Ingredient("Cheese",4), new Ingredient("Bread",1), new Ingredient("Mayo",1), new Ingredient("Tomatoes",2)])
      ];
      getRecipes(){
          return this.recipes.slice();
      }

<<<<<<< HEAD
      addtoShop(ingredients: Ingredient[]){
        this.ingredientServ.addingredients(ingredients);
      }

=======
>>>>>>> origin/master
}

