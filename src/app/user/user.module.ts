import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { UserAddComponent } from './useradd/useradd.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserService } from './user.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    UserAddComponent, 
    UserListComponent, 
    UserItemComponent, 
    UserLoginComponent, 
    UserProfileComponent
  ],
  exports: [ 
    CommonModule, 
    UserAddComponent,
    UserLoginComponent,
    UserProfileComponent,
    UserListComponent 
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
