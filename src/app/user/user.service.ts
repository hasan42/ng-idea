import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { User } from './user';
import { CurrentUser } from './current-user';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  linkPhp = 'users.php';
  login: CurrentUser = {id:null,name:null,admin:false};
  loginAdmin: boolean = false;

  user: User[] = [
    { id: 1, name: 'zzz', password: 'aaa', admin: true },
    { id: 2, name: 'qqq', password: 'aaa', admin: false },
    { id: 3, name: 'www', password: 'sss', admin: false },
  ];

  observableUsers = new BehaviorSubject<User[]>(this.user);
  users$ = this.observableUsers.asObservable();

  observableLogin = new BehaviorSubject<CurrentUser>(this.login);
  login$ = this.observableLogin.asObservable();

  constructor(private http: HttpClient) {
  }

  getUsersRemote() {
    if(this.login.admin){
      this.http.get(this.linkPhp).subscribe((value : any) =>{
        value.sort((a,b)=>{
          return a.id - b.id
        })
        this.user = value;
        this.observableUsers.next(this.user)
      },
      error => {
        console.log(error)
      });
    }
  }

  addUser(name,password){
    // let maxId = Math.max.apply(Math, this.user.map(item => item.id));
    // maxId = maxId == -Infinity ? 0 : maxId;
    // let obj = { id: maxId+1, name: name, password: password, admin: false };
    // this.user.push(obj);

    let formData = new FormData();
    formData.append('actions', 'add new');
    formData.append('name', name);
    formData.append('password', password);

    this.http.post(this.linkPhp, formData,{responseType: 'text'}).subscribe((value : any) =>{
      this.getUsersRemote()
    },
    error => {
      console.log(error)
    });
  }
  deleteUser(id){
    // let el = this.user.findIndex(item => item.id === id);
    // this.user.splice(el, 1);

    this.http.delete(this.linkPhp, {params: {'id': id}}).subscribe((value : any) =>{
      this.getUsersRemote()
    },
    error => {
      this.getUsersRemote()
      console.log(error)
    });
  }

  loginUser(name,password){
    // let el = this.user.findIndex(item => item.name === name)
    // try {
    //   if(this.user[el].password === password){
    //     this.login = {id: this.user[el].id, name: this.user[el].name, admin: this.user[el].admin};
    //     this.observableLogin.next(this.login);
    //   }
    // }catch(error){
    //   console.log('error ',error.message);
    // }

    let params = new HttpParams().set("login", '1').set("name", name).set("password", password);

    this.http.get(this.linkPhp, {params: params,responseType: 'json'}).subscribe((value : any) =>{
      if(value.length > 0){
        let admin = value[0].admin == '1' ? true : false;
        this.login = {id: value[0].id, name:  value[0].name, admin:  admin};
        this.observableLogin.next(this.login);
        if(admin){
          this.getUsersRemote()
        }
      }
    },
    error => {
      // this.getUsersRemote()
      console.log(error)
    });
  }
  getCurrentUser(){
    return this.login;
  }
  exitUser(){
    this.login = {id:null,name:null,admin:false};
    this.observableLogin.next(this.login);
    this.user = [];
    this.observableUsers.next(this.user)
  }
}
