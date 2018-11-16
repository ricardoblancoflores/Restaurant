import { Ingredient } from "../shared/ingredients.model";
import { Subject } from "rxjs";
export class IngredientsService{
    actlist = new Subject<void>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[]=[
        new Ingredient('Tomatoes', 5),
        new Ingredient('Apples',3),
      ];

    getIngredientes(){
        return this.ingredients.slice();
    }

    addIngredient(nIngredient: Ingredient){
        var ning = this.ingredients.find( Ingredient => Ingredient.name === nIngredient.name);
        if(ning !== undefined){
            ning.amount= ning.amount + nIngredient.amount;
        }else{
           this.ingredients.push(nIngredient);
        }
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

    getIngridient(inde: number){
        return this.ingredients[inde];
    }

    updateIngredient(index: number, ing: Ingredient){
        this.ingredients[index] = ing;
    }

    delteItem(i: number){
        this.ingredients.splice(i, 1);
    }
}