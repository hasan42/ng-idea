import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { ThingsService } from './things/things.service';
import { Subscription ,BehaviorSubject,   } from 'rxjs';
import { take, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-idea';

  currentUser: any = {id:null, name:null, admin:false};
  private subscription: Subscription;

  constructor(private serviceUser: UserService, private serviceThings: ThingsService) { }

  ngOnInit() {
    this.subscription = this.serviceUser.login$.subscribe(
        value => {
          this.currentUser = value;
          this.letFilterItems();
        },
        error => console.log(error)
      );
  }

  letFilterItems(){
    if(this.currentUser.id !== null){
      this.serviceThings.getItemsRemote(this.currentUser.id)
    }
  }
}
