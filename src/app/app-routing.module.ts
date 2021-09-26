import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { ItemComponent } from './pages/item/item.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item', component: ItemComponent },
  { path: 'productos', component: ProductosComponent},
  { path: 'detalles', component: DetallesComponent},
  { path: "**", pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
