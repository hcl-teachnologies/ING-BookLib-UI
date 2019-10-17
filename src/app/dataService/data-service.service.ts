import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient, HttpResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  loginData(userId, password) {
    interface UserResponse {
      success: boolean;
      dataset: any;
    }
    const headerKey = {'Content-Type': 'application/json', 'Accept': '', 'Authkey': ''};
    const headers = new HttpHeaders(headerKey);

    const body = JSON.stringify({
      'userName': userId,
      'password': password,
     
    });

    return new Promise(resolve => {
      this.http.post('http://10.117.189.226:9910/library/login', body, {headers: headers, observe: 'response'})
        .subscribe((response: HttpResponse<UserResponse>) => {
            if (response.status === 200) {
                resolve();
              } else {
                resolve(false);
              }
          }, error => {
            resolve(false);
          }
        );
    });
  }
  saveRegisterData(userName, userEmail) {
    interface UserResponse {
      success: boolean;
      dataset: any;
    }
    const headerKey = {'Content-Type': 'application/json', 'Accept': '', 'Authkey': ''};
    const headers = new HttpHeaders(headerKey);

    const body = JSON.stringify({
      'userName': userName,
      'userEmail': userEmail,
     
    });

    return new Promise(resolve => {
      this.http.post('http://10.117.189.226:9910/library/registration', body, {headers: headers, observe: 'response'})
        .subscribe((response: HttpResponse<UserResponse>) => {
            if (response.status === 201) {
                resolve();
              } else {
                resolve(false);
              }
          }, error => {
            resolve(false);
          }
        );
    });
  }

  saveDonateData(bookName, author,categoryName) {
    interface UserResponse {
      success: boolean;
      dataset: any;
    }
    const headerKey = {'Content-Type': 'application/json', 'Accept': '', 'Authkey': ''};
    const headers = new HttpHeaders(headerKey);

    const body = JSON.stringify({
      'bookName': bookName,
      'author': author,
      'categoryName':categoryName,
     
    });

    return new Promise(resolve => {
      this.http.post('http://10.117.189.226:9900/library/donation', body, {headers: headers, observe: 'response'})
        .subscribe((response: HttpResponse<UserResponse>) => {
            if (response.status === 201) {
                resolve();
              } else {
                resolve(false);
              }
          }, error => {
            resolve(false);
          }
        );
    });
  }
  getBookData() {
    interface UserResponse {
      success: boolean;
      dataset: any;
    }
    const headerKey = {'Content-Type': 'application/json', 'Accept': '', 'Authkey': ''};
    const headers = new HttpHeaders(headerKey);

    
    return new Promise(resolve => {
      this.http.get('http://10.117.189.156:9910/library/api/books', {headers: headers, observe: 'response'})
        .subscribe((response: HttpResponse<UserResponse>) => {
            if (response.status === 200) {
                resolve(response.body);
              } else {
                resolve(false);
              }
          }, error => {
            resolve(false);
          }
        );
    });
  }
  getCategorysData() {
    interface UserResponse {
      success: boolean;
      dataset: any;
    }
    const headerKey = {'Content-Type': 'application/json', 'Accept': '', 'Authkey': ''};
    const headers = new HttpHeaders(headerKey);

    
    return new Promise(resolve => {
      this.http.get('http://10.117.189.156:9910/library/api/categories', {headers: headers, observe: 'response'})
        .subscribe((response: HttpResponse<UserResponse>) => {
            if (response.status === 200) {
                resolve(response.body);
              } else {
                resolve(false);
              }
          }, error => {
            resolve(false);
          }
        );
    });
  }

  getdonateCategorysData() {
    interface UserResponse {
      success: boolean;
      dataset: any;
    }
    const headerKey = {'Content-Type': 'application/json', 'Accept': '', 'Authkey': ''};
    const headers = new HttpHeaders(headerKey);

    
    return new Promise(resolve => {
      this.http.get('http://10.117.189.226:9900/library/categories', {headers: headers, observe: 'response'})
        .subscribe((response: HttpResponse<UserResponse>) => {
            if (response.status === 201) {
                resolve(response.body);
              } else {
                resolve(false);
              }
          }, error => {
            resolve(false);
          }
        );
    });
  }
  getSearchBookData(searchText) {
    interface UserResponse {
      success: boolean;
      dataset: any;
    }
    const headerKey = {'Content-Type': 'application/json', 'Accept': '', 'Authkey': ''};
    const headers = new HttpHeaders(headerKey);

    
    return new Promise(resolve => {
      this.http.get('http://10.117.189.47:9910/library/api/books/'+ searchText, {headers: headers, observe: 'response'})
        .subscribe((response: HttpResponse<UserResponse>) => {
            if (response.status === 200) {
                resolve(response.body);
              } else {
                resolve(false);
              }
          }, error => {
            resolve(false);
          }
        );
    });
  }
  borrowBook(userId, BookID) {
    interface UserResponse {
      success: boolean;
      dataset: any;
    }
    const headerKey = {'Content-Type': 'application/json', 'Accept': '', 'Authkey': ''};
    const headers = new HttpHeaders(headerKey);

    // const body = JSON.stringify({
    //   'userName': userId,
    //   'password': password,
     
    // });

    return new Promise(resolve => {
      this.http.put('http://10.117.189.239:9910/library/api/users/'+ userId + '/books/'+ BookID + '/borrow', {headers: headers, observe: 'response'})
        .subscribe((response: HttpResponse<UserResponse>) => {
            if (response.status === 200) {
                resolve();
              } else {
                resolve(false);
              }
          }, error => {
            resolve(false);
          }
        );
    });
  }
}
