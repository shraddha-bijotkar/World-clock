import { Component } from '@angular/core';
import { Time } from '@angular/common';
import {ApiserviceService} from './apiservice.service';
import {HttpClient} from '@angular/common/http';
import { Times } from './times';
import {NgForm, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { New } from './new';
import { Locat } from './locat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public http: HttpClient, private apiService: ApiserviceService, private fb: FormBuilder){
    this.userForm = this.fb.group({
      Location : ''
    })
  }
  
errMess : string;
Times ;
Locat : Locat[];
new : New;
Selected : string;
userForm : FormGroup;


  ngOnInit(){
    this.getloclist();
    this.onSubmit(this.userForm);
    

  }
  getUserList() {
    this.apiService
    .getUsers()
    .subscribe((datetime) => {
      this.Times = datetime,
      //JSON.stringify(this.Times);
      
      console.log(this.Times)},
      (errmess) =>{ this.errMess = <any>errmess,
        console.log('oggy');
      }
    
    )
  }
  getloclist(){
    this.apiService.getloc().subscribe((result)=> {
      this.Locat = result;
    //console.log(this.Locat)
  },
      (errr) =>{
        this.errMess = <any>errr;
      }
    )
  }
  title = 'mean';
  

onSubmit(userForm) {
  this.new = this.userForm.value;

  this.apiService.postVal(this.userForm.value).subscribe((response)=>{
    console.log(response);
    this.Times = response;
  }),
  console.log(this.new);
  this.getUserList();
  }  
}

  


