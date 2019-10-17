import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataServiceService } from '../dataService/data-service.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userId:string;
  bookDetails:any;
  searchBookDetails:any;
  SubmitData:any;
  categoryDetails:any;
  
  constructor( private router: Router,private apiCall:DataServiceService) { }

  ngOnInit() {
    //localStorage.setItem('title',this.title)
    this.bookDetailsData();
  }
  async bookDetailsData(){
    this.bookDetails = await this.apiCall.getBookData();
    this.categoryDetails = await this.apiCall.getCategorysData();
    console.log(this.bookDetails);
     }

     async borrowBook(bookId){
     this.userId =  localStorage.getItem('userId');
      this.SubmitData = await this.apiCall.borrowBook(this.userId,bookId)

     }

     async searchClick(){

      this.searchBookDetails = await this.apiCall.getBookData();
    //   'res' = ['all', ''];
    //  const arr = object.keys(res);
    

     }
     
}
