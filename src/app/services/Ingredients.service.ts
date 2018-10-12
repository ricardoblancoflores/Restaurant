import { Ingredient } from "../shared/ingredients.model";
import { EventEmitter } from "@angular/core";
export class IngredientsService{
    actlist = new EventEmitter<void>();
    private ingredients: Ingredient[]=[
        new Ingredient('Toamtoes', 5),
        new Ingredient('Apples',3),
      ];

    getIngredientes(){
        return this.ingredients.slice();
    }
    addIngredient(nIngredient: Ingredient){
        this.ingredients.push(nIngredient);
        console.log(this.ingredients);
    }
}