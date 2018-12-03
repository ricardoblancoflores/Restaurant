import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-detial',
  templateUrl: './recipes-detial.component.html',
  styleUrls: ['./recipes-detial.component.css']
})
export class RecipesDetialComponent implements OnInit {
// @Input() 
recipe:Recipe;
id: number;
  constructor(private recipeserv: RecipeService,
    private route: ActivatedRoute, private router: Router) { }
 
  ngOnInit() {
    this.route.params.subscribe((param:Params) => {
      this.id = +param['id'];
      this.recipe = this.recipeserv.getRecipe(this.id);
    })
  }

  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo: this.route})
  }

  onDelete(){
    this.recipeserv.deleteRecipe(this.id);
    this.router.navigate(["../"],{relativeTo: this.route})
  }

  toShop(){
    this.recipeserv.addtoShop(this.recipe.ingredients.slice());
  }
}
