import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { NgModule, Component } from "@angular/core";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesDetialComponent } from "./recipes/recipes-detial/recipes-detial.component";
import { NewrecipeComponent } from "./recipes/newrecipe/newrecipe.component";

const routes: Routes = [
    { path: "", redirectTo: "/recipes", pathMatch: "full" },
    { path: "recipes", component: RecipesComponent, children: [
        {path: '', component: RecipeStartComponent},
        {path: "new", component: NewrecipeComponent},
        {path: ':id', component: RecipesDetialComponent},
        {path: ':id/edit', component: NewrecipeComponent}
    ] },
    { path: "shoppinglist", component: ShoppingListComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}