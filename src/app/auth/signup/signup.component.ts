import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('signupForm') signupForm: NgForm;
  status: string;	

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(){
  	this.authService.signupUser(this.signupForm.value.email, this.signupForm.value.password)
  		.catch(error => {
  			this.status = error.message
  			// this.signupForm.form.patchValue({
  			// 	'email': ''
  			// });
  		});
  }

}
