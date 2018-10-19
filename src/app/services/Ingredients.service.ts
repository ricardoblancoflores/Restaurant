import { Ingredient } from "../shared/ingredients.model";
import { EventEmitter } from "@angular/core";
export class IngredientsService{
    actlist = new EventEmitter<void>();
    private ingredients: Ingredient[]=[
        new Ingredient('Tomatoes', 5),
        new Ingredient('Apples',3),
      ];

    getIngredientes(){
        return this.ingredients.slice();
    }
    addIngredient(nIngredient: Ingredient){
        this.ingredients.push(nIngredient);
    }

    addingredients(ingredientes: Ingredient[]){
        var ing;
        for(var i of ingredientes){
            ing = this.ingredients.find( Ingredient => Ingredient.name === i.name);
            //var indice = this.ingredients.findIndex( Ingredient => Ingredient.name === i.name);
            if(ing !== undefined){
                //this.ingredients[indice].amount = ing.amount + i.amount;
                ing.amount= ing.amount + i.amount;
            }else{
               this.ingredients.push(i);
            }
        }
    }
}