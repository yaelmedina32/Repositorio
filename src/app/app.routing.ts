import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './componentes/home.component';
import { NosotrosComponent } from './componentes/nosotros.component';

const rutas: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: '**', component: HomeComponent}
];
export const appRoutingProviders: any[] = [];
export const appRoutes:ModuleWithProviders<any> = RouterModule.forRoot(rutas);
