import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule,FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform;
  @Input() username : 'cdac';
  @Input()  password :'cdac';
  constructor( private router:Router) { 
    
  }

  ngOnInit() {
     this.myform = new FormGroup({
       name: new FormGroup({
         username : new FormControl('',Validators.required),
         password : new FormControl('',Validators.required)
       })
     });
  }

  onSubmit()
  {
    console.log('hi');
      if(this.username=='cdac')
      {
        return this.router.navigate(['./dashboardlayout']);
      }
    
    
  }
}
