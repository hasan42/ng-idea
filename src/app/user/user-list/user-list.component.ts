import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription ,BehaviorSubject,   } from 'rxjs';
import { take, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  items: any;
  private subscription: Subscription;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.subscription = this.service.observableUsers.subscribe(
        value => {
          this.items = value;
        },
        error => console.log(error)
      );
  }

}
