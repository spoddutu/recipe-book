import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedMenuItem: string = 'recipe';

  ngOnInit(){
  	firebase.initializeApp({
		apiKey: "AIzaSyA1GSR-_QZZsSU740yW7rsCgZEUX4LIIn0",
    	authDomain: "recipe-book-cb3c6.firebaseapp.com"
  	});
  }

  onNavigate(menuItem: string){
  	console.error(menuItem);
  	this.selectedMenuItem = menuItem;
  }
}
