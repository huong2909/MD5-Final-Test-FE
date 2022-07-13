import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TourListComponent} from "./tour-list/tour-list.component";
import {TourCreateComponent} from "./tour-create/tour-create.component";
import {TourEditComponent} from "./tour-edit/tour-edit.component";
import {TourDetailComponent} from "./tour-detail/tour-detail.component";
import {TourDeleteComponent} from "./tour-delete/tour-delete.component";

const routes: Routes = [
  {path: '', component: TourListComponent},
  {path: 'create', component: TourCreateComponent},
  {path: 'edit/:id', component: TourEditComponent},
  {path: 'detail/:id', component: TourDetailComponent},
  {path: 'delete/:id', component: TourDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourRoutingModule { }
