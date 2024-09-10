import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}), // Inicializa o Store sem reducers por enquanto
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Mantém o histórico das últimas 25 ações
      logOnly: environment.production, // Em produção logar apenas ações
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
