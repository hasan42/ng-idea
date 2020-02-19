import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ThingsService } from '../things.service';
import { faTrashAlt, faEdit, faBan, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-things-item',
  templateUrl: './things-item.component.html',
  styleUrls: ['./things-item.component.scss']
})
export class ThingsItemComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  faBan = faBan;
  faSave = faSave;

  @Input() id: number;
  @Input() name: string;
  @Input() text: string;

  editMode: boolean = false;
  validMsg: string = '';
  form = {
    name: this.name,
    text: this.text
  }

  constructor(private service: ThingsService) { }

  ngOnInit() {
    // console.log(this.text);
  }

  saveEdit(){
    try {
      if(!this.form.name || this.form.name === ''){
        throw new Error("не заполнено name");
      }
      if(!this.form.text || this.form.text === ''){
        throw new Error("не заполнено text");
      }

      this.service.editItem(this.id, this.form.name, this.form.text)
      this.validMsg = 'saved!'
      this.form = {
        name: '',
        text: '',
      };
      this.editMode = !this.editMode;
    }catch(error){
      this.validMsg = 'error: ' + error.message
    }
  }

  editIt(){
    this.form = {
      name: this.name,
      text: this.text
    }
    this.editMode = !this.editMode;
  }

  delIt(id){
    if(confirm("Delete item?")){
      this.service.deleteItems(id);
    }
  }

}
