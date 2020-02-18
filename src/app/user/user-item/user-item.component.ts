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
  @Input() admin: any;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.admin = this.admin == '1' ? true : false;
  }

  delIt(id){
    if(confirm("Delete item?")){
      this.service.deleteUser(id);
    }
  }

}
