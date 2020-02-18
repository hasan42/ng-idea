import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { Subscription ,BehaviorSubject,   } from 'rxjs';
import { take, finalize } from 'rxjs/operators';
import { CurrentUser } from '../current-user';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  faSignInAlt = faSignInAlt;
  form = {
    name: '',
    password: '',
  };

  validMsg: string = '';

  constructor(private service: UserService) { }

  ngOnInit() {
  }

  login(event) {
    try {
      if(!this.form.name || this.form.name === ''){
        throw new Error("не заполнено name");
      }
      if(!this.form.password || this.form.password === ''){
        throw new Error("не заполнено password");
      }

      this.service.loginUser(this.form.name, this.form.password)
      this.validMsg = ''
    }catch(error){
      this.validMsg = 'error: ' + error.message
    }
  }

}
