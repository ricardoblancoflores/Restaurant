import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { IngredientsService } from '../services/Ingredients.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private IngredientsService: IngredientsService) { }

  ngOnInit() {
    this.IngredientsService.actlist.subscribe((event)=>{
      this.ingredients = this.IngredientsService.getIngredientes();
<<<<<<< HEAD
=======
      console.log(this.ingredients);
>>>>>>> origin/master
    }
  )
    this.ingredients =this.IngredientsService.getIngredientes();
  }

}
