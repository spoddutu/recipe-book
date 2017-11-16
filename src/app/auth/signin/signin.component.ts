import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild('signinForm') signinForm: NgForm;	

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignin(){
  	this.authService.signinUser(this.signinForm.value.email, this.signinForm.value.password);
  }
}
