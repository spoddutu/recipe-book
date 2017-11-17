import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { RecipeModule } from './recipes/recipe.module';
import { SharedModule} from './shared/shared.module';
import { ShoppinglistModule } from './shopping-list/shoppinglist.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AuthService } from './auth/auth.service';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { DataStorageService } from './shared/data-storage.service';

import { AuthGuard } from './auth/auth-guard.service';
import { CanDeactivateGaurd } from './shared/deactivate-gaurd.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RecipeModule,
    SharedModule,
    ShoppinglistModule,
    AuthModule
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard, CanDeactivateGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
