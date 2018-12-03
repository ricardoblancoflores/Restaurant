import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Recipe} from '../recipes.model'; 
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({ 
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[];
  Subscription;
  constructor(private recipeService:RecipeService, private router: Router, private route: ActivatedRoute) {
   }
 
  ngOnInit() {
    this.Subscription = this.recipeService.RecipeUpdate.subscribe((Recipe)=>{
      this.recipes =[];
      this.recipes = this.recipeService.getRecipes();
      //this.recipes = this.recipeService.getRecipes();
      console.log(this.recipes)
    })
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(){
    this.Subscription.unsubscribe();
  }

  onNew(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
