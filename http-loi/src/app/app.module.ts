import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FooComponentComponent } from './foo-component/foo-component.component'; //Importa Il modulo http

@NgModule({
 declarations: [
   AppComponent,
  
   FooComponentComponent
 ],
 imports: [
   BrowserModule, HttpClientModule //Aggiungi il modulo http qui 
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }