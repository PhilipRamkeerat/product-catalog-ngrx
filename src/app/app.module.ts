import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { productReducer } from './products/store/reducers/products.reducer';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ products: productReducer }), // Add reducer on store
    StoreDevtoolsModule.instrument({
      maxAge: 25, // keep history of 25 states last states
      logOnly: environment.production, // Restrict extension to log-only mode in production
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
