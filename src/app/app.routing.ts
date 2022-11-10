import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { TipsComponent } from './components/tips/tips.component';
import { ContactoComponent } from './components/contacto/contacto.component';

//Definir mis rutas

const appRoutes: Routes = [
	{path:'',component: QuienesSomosComponent},
	{path:'Quienes-Somos',component:QuienesSomosComponent},
	{path:'Recetas',component:RecetasComponent},
	{path:'Tips',component:TipsComponent},
	{path:'Contacto',component:ContactoComponent},
	{path:'**',component: QuienesSomosComponent}
];

export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);