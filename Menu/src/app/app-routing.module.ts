// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'categoria/:id', component: CategoriaComponent },
  { path: 'item/:id', component: ItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
