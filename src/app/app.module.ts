import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { TipsComponent } from './components/tips/tips.component';
import { ContactoComponent } from './components/contacto/contacto.component';

import {MatExpansionModule} from '@angular/material/expansion';



const material = [

MatExpansionModule];

@NgModule({
  declarations: [
    AppComponent,
    QuienesSomosComponent,
    RecetasComponent,
    TipsComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MatExpansionModule,
    HttpClientModule,
    FormsModule
   
   // AppRoutingModule
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
