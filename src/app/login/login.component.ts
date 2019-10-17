import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { DataServiceService } from '../dataService/data-service.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loginId: string;
    password: string;
    loginDetails:any;
  constructor( private formBuilder: FormBuilder,private router: Router,private apiCall:DataServiceService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      loginId: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f() { return this.loginForm.controls; }

  onSubmit(){
    console.log("in submit")
    this.submitted = true;
  
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
  
    this.loginId = this.loginForm.value.loginId,
    this.password = this.loginForm.value.password
    console.log(this.loginId)
    this.loginData(this.loginId,this.password)
    this.router.navigateByUrl('/home')
  
  
  }
  async loginData(userId,password){
    this.loginDetails = await this.apiCall.loginData(userId,password)
    //console.log(this.loanDetails);
    localStorage.setItem('userId',this.loginId)
     }
}
