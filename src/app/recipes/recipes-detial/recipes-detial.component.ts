import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes-detial',
  templateUrl: './recipes-detial.component.html',
  styleUrls: ['./recipes-detial.component.css']
})
export class RecipesDetialComponent implements OnInit {
 @Input() recipe:Recipe;
  constructor(private recipeserv: RecipeService) { }
 
  ngOnInit() {
  }

  toShop(){
    this.recipeserv.addtoShop(this.recipe.ingredients.slice());
  }
}
