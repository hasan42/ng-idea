import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ThingsListComponent } from './things-list/things-list.component';
import { ThingsAddComponent } from './things-add/things-add.component';
import { ThingsItemComponent } from './things-item/things-item.component';
import { ThingsService } from './things.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ThingsListComponent, 
    ThingsAddComponent, 
    ThingsItemComponent
  ],
  exports: [
    CommonModule,
    ThingsListComponent, 
    ThingsAddComponent, 
    ThingsItemComponent
    ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    ThingsService
  ]
})
export class ThingsModule { }
