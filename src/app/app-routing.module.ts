import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component'
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { UpdateComponent } from './update/update.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  {path:'', component:ShowComponent},
  {path:'add', component:AddComponent},
  {path:'show', component:ShowComponent},
  {path:'update', component:UpdateComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'home', component:HomeComponent},
  {path:'user',component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
