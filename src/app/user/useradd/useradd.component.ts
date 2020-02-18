import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.scss']
})
export class UserAddComponent implements OnInit {
  faPlus = faPlus;
  form = {
    name: '',
    password: '',
  };

  validMsg: string = '';

  myForm : FormGroup;

  constructor(private service: UserService) { }

  ngOnInit() {
  }

  add(event) {
    try {
      if(!this.form.name || this.form.name === ''){
        throw new Error("не заполнено name");
      }
      if(!this.form.password || this.form.password === ''){
        throw new Error("не заполнено password");
      }

      this.service.addUser(this.form.name, this.form.password)
      this.validMsg = 'saved!'
    }catch(error){
      this.validMsg = 'error: ' + error.message
    }
  }

}
