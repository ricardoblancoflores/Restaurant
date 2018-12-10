import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesDetialComponent } from './recipes/recipes-detial/recipes-detial.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { IngredientsService } from './services/Ingredients.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { NewrecipeComponent } from './recipes/newrecipe/newrecipe.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { RecipeService } from './services/recipe.service';
import { SigninComponent } from './auth/signin/signin.component';
import { WelcomeComponent } from './recipes/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    RecipesDetialComponent,
    RecipesListComponent,
    RecipesItemComponent,
    ShoppingEditComponent,
    RecipeStartComponent,
    NewrecipeComponent,
    RecipesEditComponent,
    SigninComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [//Uso de servicios por padre
    RecipeService, IngredientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }