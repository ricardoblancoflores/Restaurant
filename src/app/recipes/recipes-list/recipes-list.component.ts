import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Recipe} from '../recipes.model'; 
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({ 
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[];
  constructor(private recipeService:RecipeService, private router: Router, private route: ActivatedRoute) {
   }
 
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNew(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
