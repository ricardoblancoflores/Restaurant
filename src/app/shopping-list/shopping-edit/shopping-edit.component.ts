import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { IngredientsService } from '../../services/Ingredients.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  private subscription: Subscription;
  editItem: Ingredient;
  @ViewChild('f')slForm: NgForm;
  editMode = false;
  constructor(private ingredientService: IngredientsService) { }

  ngOnInit() {
    this.subscription = this.ingredientService.startedEditing.subscribe((index:number) =>{
      this.editMode = true;
      this.editItem = this.ingredientService.getIngridient(index);
      this.slForm.setValue({name: this.editItem.name, amount: this.editItem.amount})
    });
  }

  OnAddItem(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, Math.floor(value.amount));
    this.ingredientService.addIngredient(newIngredient);
    this.ingredientService.actlist.emit();
  }


}
