import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';


export enum RequestMethod {
  Get,
  Post,
  Put,
  Delete,
  Options,
  Head,
  Patch
}

export class User {
  name: string;
  email: string;
  nickname: string;

  constructor(name: string, email: string, nickname: string) {
    this.name = name;
    this.email = email;
    this.nickname= nickname;
  }
}

@Injectable()
export class AuthService {
  currentUser: User;
  data: Object;
  loading: boolean;
  constructor (public http: Http){
  }

  public login(credentials) {
    if (credentials.email === null || credentials.password === null || credentials.nickname === null || credentials.name === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        this.loading= true;
        this.http.request("http://127.0.0.1:8081/listUsers")

            .subscribe((res: Response) => {
              this.data=res.json();
              this.loading=false;
              console.log(this.data);
            });

        let access = (credentials.password === "pass" && credentials.email === "email");
        this.currentUser = new User('Simone', 'simone.bonfante93@gmail.com', "bonf");
        observer.next(access);
        observer.complete();
      });
    }
  }

  public register(credentials) {
    if (credentials.email === null || credentials.password === null || credentials.nickname === null || credentials.name === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!

      this.loading =true;
      this.http.post(
          "http://127.0.0.1:8081/addUser",
          JSON.stringify({
            body: "bar",
            title: "foo",
            userId: 1
          }))
          .subscribe((res: Response) => {
            this.data=res.json();
            this.loading=false;
          });

      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
