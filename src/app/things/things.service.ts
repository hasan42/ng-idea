import { Injectable } from '@angular/core';
import { Things } from './things';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThingsService {
  linkPhp = 'things.php';

  items: Things[] = [
    { id: 1, name: 'zzz 0', text: 'zzz 0', authorId: 1 },
    { id: 2, name: 'zzz 1', text: 'zzz 1', authorId: 1 },
    { id: 3, name: 'qqq 0', text: 'qqq 0', authorId: 2 },
    { id: 4, name: 'www 0', text: 'www 0', authorId: 3 },
    { id: 5, name: 'www 1', text: 'www 1', authorId: 3 },
    { id: 6, name: 'zzz 2', text: 'zzz 2', authorId: 1 },
  ];
  filteredItems: Things[] = [];

  observableItems = new BehaviorSubject<Things[]>(this.items);
  items$ = this.observableItems.asObservable();

  userId: number = null;
  userAdmin: boolean = false;

  constructor(private http: HttpClient) {
  }

  getItemsRemote(id){
    this.userId = id;
    let params = new HttpParams().set("author", this.userId.toString());

    this.http.get(this.linkPhp, {params: params,responseType: 'json'}).subscribe((value : any) =>{
      value.sort((a,b)=>{
        return a.id - b.id
      })
      this.items = value;
      console.log(this.items);
      this.observableItems.next(this.items);
    },
    error => {
      console.log(error)
    });
  }

  filterItems(id, admin){
    console.log(id,admin);
    this.userId = id;
    this.userAdmin = admin;
    // if(admin){
    //   this.observableItems.next(this.items);
    // }else{
      let filterId = Number(id);
      let arr = this.getItemsAuthor(filterId);
      this.observableItems.next(arr);
    // }
  }

  getItem(id){
    let el = this.items.findIndex(item => item.id === id)
    return this.items[el]
  }
  getItems(){
    return this.items
  }
  getItemsAuthor(id){
    let arr = this.items.filter(item => item.authorId === id)
    return arr
  }

  addItem(name,text){
    // let maxId = Math.max.apply(Math, this.items.map(item => item.id));
    // maxId = maxId == -Infinity ? 0 : maxId;
    // let obj = { id: maxId+1, name: name, text: text, authorId: this.userId };
    // this.items.push(obj);
    // this.filterItems(this.userId, this.userAdmin)

    let formData = new FormData();
    formData.append('actions', 'add new');
    formData.append('name', name);
    formData.append('text', text);
    formData.append('author', this.userId.toString());

    this.http.post(this.linkPhp, formData,{responseType: 'text'}).subscribe((value : any) =>{
      this.getItemsRemote(this.userId);
    },
    error => {
      console.log(error)
    });
  }

  deleteItems(id){
    // let el = this.items.findIndex(item => item.id === id);
    // this.items.splice(el, 1);
    // this.filterItems(this.userId, this.userAdmin)

    this.http.delete(this.linkPhp, {params: {'id': id}}).subscribe((value : any) =>{
      this.getItemsRemote(this.userId)
    },
    error => {
      this.getItemsRemote(this.userId)
      console.log(error)
    });
  }
}
