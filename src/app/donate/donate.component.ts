import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { DataServiceService } from '../dataService/data-service.service'
@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  DonateForm: FormGroup;
  submitted = false;
  bookName:string;
  Author:string;
  categoryDetails:any;
  DonateDetails:any;
  Category:string;
  constructor(private formBuilder: FormBuilder,private router: Router,private apiCall:DataServiceService) { }

  ngOnInit() {
    this.DonateForm = this.formBuilder.group({
      bookName: ['', Validators.required],
      Author: ['', Validators.required]
  });
  this.getDropCategorysData()
  //this.dropcatdetails = this.apiCall.getDropCategorysData();
 // this.dropcatdetails = "hello";
  console.log(this.categoryDetails)
  }
  async getDropCategorysData(){
    this.categoryDetails = await this.apiCall.getdonateCategorysData();
    //console.log(this.loanDetails);
    //this.dropCatDetails = 1;
    this.categoryDetails = [
        { "categoryName": "Thriller"},
        { "categoryName": "Romance"},
        { "categoryName": "History"},
        { "categoryName": "General"}
       ];
 
   
     }
  onSubmit(){
    console.log("in submit")
    this.submitted = true;
  
    // stop here if form is invalid
    if (this.DonateForm.invalid) {
        return;
    }
  
    this.bookName = this.DonateForm.value.bookName,
    this.Author = this.DonateForm.value.Author,
    this.Category = this.DonateForm.value.Category,
    
    //console.log(this.loginId)
    this.saveDonateData(this.bookName,this.Author, this.Category)
    this.router.navigateByUrl('/home')
  
  
  }
  async saveDonateData(bookName,Author,Category){
    this.DonateDetails = await this.apiCall.saveDonateData(bookName,Author,Category)
    //console.log(this.loanDetails);
    //localStorage.setItem('userId',this.loginId)
     }
}
