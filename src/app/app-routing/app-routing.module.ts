import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from '../item/item.component';
import { ItemListComponent } from '../item-list/item-list.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ItemCreateComponent } from '../item-create/item-create.component';
import { ItemDeleteComponent } from '../item-delete/item-delete.component';
import { ItemEditComponent } from '../item-edit/item-edit.component';

const routes: Routes = [{
  path: 'items',
  component: ItemListComponent,
}, {
  path: 'items/:id',
  component: ItemComponent,
}, {
  path: 'login',
  component: LoginComponent,
}, {
  path: 'register',
  component: RegisterComponent,
}, {
  path: 'create',
  component: ItemCreateComponent,
}, {
  path: 'delete/:id',
  component: ItemDeleteComponent,
}, {
  path: 'edit/:id',
  component: ItemEditComponent,
}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
