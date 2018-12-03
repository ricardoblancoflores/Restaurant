import { Component, OnInit } from '@angular/core';
import { Recipe } from "../../recipes/recipes.model";
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  

  constructor(private route: ActivatedRoute, private rServ: RecipeService, private router: Router) { }
  ngOnInit() {
      this.route.params.subscribe((params)=>{
        this.id = params["id"];
        if(this.id != undefined){
          this.editMode = true;
        }
      })
      this.initForm();
  }
  private initForm(){
    let rName = "";
    let rUrl = "";
    let rDesc = "";
    const ingredients = new FormArray([]);

    if(this.editMode){
      const r = this.rServ.getRecipe(this.id);
      rName = r.name;
      rDesc = r.description;
      rUrl = r.imagePath;
      if(r['ingredients']){
        for(const ingredient of r.ingredients){
          ingredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        }
      }
      this.recipeForm = new FormGroup({
        'name': new FormControl(rName, Validators.required),
        'Url': new FormControl(rUrl, Validators.required),
        'desc': new FormControl(rDesc, Validators.required),
        'ingredients': ingredients
      });
    }else{
      this.recipeForm = new FormGroup({
        'name': new FormControl(null, Validators.required),
        'Url': new FormControl(null, Validators.required),
        'desc': new FormControl(null, Validators.required),
        'ingredients': new FormArray([])
      });
    }
  }
   onAddIngredient(){
     (<FormArray>this.recipeForm.get('ingredients')).push(
       new FormGroup({
         'name': new FormControl(null, Validators.required),
         'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
       })
     )
   }

   deleteItem(index: number){
     (<FormArray>this.recipeForm.get("ingredients")).removeAt(index);
   }

   onCancel(){
    this.router.navigate(["../"],{relativeTo: this.route})
   }

   onSubmit(){
     console.log(this.recipeForm);
     var Rname= this.recipeForm.get('name').value;
     var Rurl = this.recipeForm.get('Url').value;
     var Rdesc = this.recipeForm.get('desc').value;
     var ingArray = this.recipeForm.get('ingredients').value;
     var recipe= new Recipe(Rname,Rdesc,Rurl, ingArray);
     this.rServ.addRecipe(recipe);
     this.initForm();
   }
}
