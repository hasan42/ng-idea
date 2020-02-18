import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription ,BehaviorSubject,   } from 'rxjs';
import { take, finalize } from 'rxjs/operators';
import { CurrentUser } from '../current-user';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  faSignOutAlt = faSignOutAlt;
  user: CurrentUser = {id:null,name:null,admin:false}
  private subscription: Subscription;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.subscription = this.service.login$.subscribe(
        value => {
          if(value.id != null){
            this.user = value;
          }else{
            this.user = {id:null,name:null,admin:false};
          }
        },
        error => console.log(error)
      );
  }

  exit(){
    this.service.exitUser();
  }

}
