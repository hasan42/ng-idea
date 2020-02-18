import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ThingsService } from '../things.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-things-add',
  templateUrl: './things-add.component.html',
  styleUrls: ['./things-add.component.scss']
})
export class ThingsAddComponent implements OnInit {
  faPlus = faPlus;
  form = {
    name: '',
    text: '',
  };

  validMsg: string = '';

  myForm : FormGroup;

  constructor(private service: ThingsService) { }

  ngOnInit() {
  }

  add(event) {
    try {
      if(!this.form.name || this.form.name === ''){
        throw new Error("не заполнено name");
      }
      if(!this.form.text || this.form.text === ''){
        throw new Error("не заполнено text");
      }

      this.service.addItem(this.form.name, this.form.text)
      this.validMsg = 'saved!'
      this.form = {
        name: '',
        text: '',
      };
    }catch(error){
      this.validMsg = 'error: ' + error.message
    }
  }

}
