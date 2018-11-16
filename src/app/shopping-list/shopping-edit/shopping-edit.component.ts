import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { IngredientsService } from '../../services/Ingredients.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy{
  private subscription: Subscription;
  private subsList: Subscription;
  editItem: Ingredient;
  indexEdit: number;
  @ViewChild('f')slForm: NgForm;
  editMode = false;
  constructor(private ingredientService: IngredientsService) { }

  ngOnInit() {
    this.subsList = this.ingredientService.actlist.subscribe();
    this.subscription = this.ingredientService.startedEditing.subscribe((index:number) =>{
      this.indexEdit = index;
      this.editMode = true;
      this.editItem = this.ingredientService.getIngridient(index);
      this.slForm.setValue({name: this.editItem.name, amount: this.editItem.amount})
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subsList.unsubscribe();
  }

  OnAddItem(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, Math.floor(value.amount));
    if(this.editMode){
      this.ingredientService.updateIngredient(this.indexEdit, newIngredient);
      this.ingredientService.actlist.next();
    }else{
      this.ingredientService.addIngredient(newIngredient);
      this.ingredientService.actlist.next();
    }
    this.slForm.resetForm()
  }

  onDelete(){
    this.ingredientService.delteItem(this.indexEdit);
    this.ingredientService.actlist.next();
    this.slForm.resetForm();
    this.onClear();
  }

  onClear(){
    this.slForm.resetForm();
    this.editMode = false;
  }
}
