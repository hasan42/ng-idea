import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  faTrash = faTrashAlt;
  @Input() id: number;
  @Input() name: string;
  @Input() password: string;
  @Input() admin: boolean;

  constructor(private service: UserService) { }

  ngOnInit() {
  }

  delIt(id){
    this.service.deleteUser(id);
  }

}
