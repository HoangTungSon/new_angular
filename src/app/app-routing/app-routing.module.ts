import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from '../item/item.component';
import { ItemListComponent } from '../item-list/item-list.component';

const routes: Routes = [{
  path: 'items',
  component: ItemListComponent,
}, {
  path: 'items/:id',
  component: ItemComponent,
}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
