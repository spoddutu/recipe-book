import * as firebase from 'firebase';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; 

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router){}

  signupUser(email: string, password: string) {
  	return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  signinUser(email: string, password: string) {
  	firebase.auth().signInWithEmailAndPassword(email, password)
  		.then(response =>{
  			firebase.auth().currentUser.getToken().then((token: string) => this.token = token);
  			this.router.navigate(["/"]);
  		})
  		.catch(error => console.log(error));
  }

  logout(){
  	firebase.auth().signOut();
  	this.token = null;
  }

  getToken(){
  	firebase.auth().currentUser.getToken().then((token: string) => this.token = token);
  	return this.token;
  }

  isAuthenticated() {
  	return this.token != null;
  }
}