import { Component, OnInit } from '@angular/core';
import { ThingsService } from '../things.service';
import { Subscription ,BehaviorSubject,   } from 'rxjs';
import { take, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-things-list',
  templateUrl: './things-list.component.html',
  styleUrls: ['./things-list.component.scss']
})
export class ThingsListComponent implements OnInit {

  items: any;
  private subscription: Subscription;

  constructor(private service: ThingsService) { }

  ngOnInit() {
    this.subscription = this.service.items$.subscribe(
        value => {
          this.items = value;
        },
        error => console.log(error)
      );
  }

}
