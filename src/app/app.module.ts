import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { RecepiesComponent } from './Components/recepies/recepies.component';
import { RecepiesListComponent } from './Components/recepies-list/recepies-list.component';
import { RecepieItemComponent } from './Components/recepie-item/recepie-item.component';
import { RecepieDetailComponent } from './Components/recepie-detail/recepie-detail.component';
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './Components/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepiesComponent,
    RecepiesListComponent,
    RecepieItemComponent,
    RecepieDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
