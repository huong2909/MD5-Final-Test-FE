import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourRoutingModule } from './tour-routing.module';
import { TourCreateComponent } from './tour-create/tour-create.component';
import { TourEditComponent } from './tour-edit/tour-edit.component';
import { TourListComponent } from './tour-list/tour-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { TourDetailComponent } from './tour-detail/tour-detail.component';
import { TourDeleteComponent } from './tour-delete/tour-delete.component';


@NgModule({
  declarations: [
    TourCreateComponent,
    TourEditComponent,
    TourListComponent,
    TourDetailComponent,
    TourDeleteComponent
  ],
  imports: [
    CommonModule,
    TourRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ]
})
export class TourModule { }
