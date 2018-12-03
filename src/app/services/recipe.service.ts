import { Recipe } from "../recipes/recipes.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { IngredientsService } from "./Ingredients.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{
    RecipeUpdate = new Subject<Recipe>();
    //recipeSelected = new EventEmitter<Recipe>();
    constructor(private ingredientServ: IngredientsService){}
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

      getRecipe(index: number){
          return this.recipes[index];
      }

      addtoShop(ingredients: Ingredient[]){
        this.ingredientServ.addingredients(ingredients);
      }

      addRecipe(recip: Recipe){
          this.recipes.push(recip);
          this.RecipeUpdate.next(recip);
      }

      updateRecipe(index: number, recip: Recipe){
          this.recipes[index] = recip;
          this.RecipeUpdate.next(recip);
      }

      deleteRecipe(id: number){
          let event = new Recipe("","","",[]);
          this.recipes.splice(id,1);
          this.RecipeUpdate.next(event);
      }
}

