import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { DataServiceService } from '../dataService/data-service.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerDetails:any;
  userName:string;
  userEmail:string;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private router: Router,private apiCall:DataServiceService) { }
title = "New User? Register Here !!!!!";
  ngOnInit() {
   this.registerForm = this.formBuilder.group({

    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
   })
  }
  get f() { return this.registerForm.controls; }
  onSubmit(){
    console.log("in submit")
    this.submitted = true;
  
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
  
    this.userName = this.registerForm.value.firstName,
    this.userEmail = this.registerForm.value.email
   // console.log(this.loginId)
    this.registerData(this.userName,this.userEmail)
    //this.router.navigateByUrl('/nav/mortgage')
  
  
  }
  async registerData(userId,password){
    this.registerDetails = await this.apiCall.saveRegisterData(userId,password)
    //console.log(this.loanDetails);
    //localStorage.setItem('userId',this.loginId)
     }
}
