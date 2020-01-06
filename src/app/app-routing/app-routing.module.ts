import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from '../hello-world/hello-world.component';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from '../item/item.component';

const routes: Routes = [{
  path: 'items',
  component: HelloWorldComponent,
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
