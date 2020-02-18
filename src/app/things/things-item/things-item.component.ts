import { Component, OnInit, Input } from '@angular/core';
import { ThingsService } from '../things.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-things-item',
  templateUrl: './things-item.component.html',
  styleUrls: ['./things-item.component.scss']
})
export class ThingsItemComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  @Input() id: number;
  @Input() name: string;
  @Input() text: string;

  constructor(private service: ThingsService) { }

  ngOnInit() {
    // console.log(this.text);
  }

  delIt(id){
    this.service.deleteItems(id);
  }

}
