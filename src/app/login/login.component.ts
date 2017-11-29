import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    rForm: FormGroup;
    name: string = '';
    password: string = '';
    tittleAlert:string ="This field is required";



public invalid:boolean;


    constructor( private router:Router, private fb:FormBuilder,public snackBar: MatSnackBar) {
        this.rForm = fb.group({
        'username':[null,Validators.required],
        'password':[null,Validators.required],
        })

    }



abc: any[] = [
    {'username' : 'admin' , 'password' : '12345' }
    ];


    ngOnInit() {
        this.invalid = false;
    }

    loginUser(rFormValue,e) {
        e.preventDefault();
        console.log(e);
        var username = e.target.elements[0].value;
        var password = e.target.elements[1].value;
       if(username == this.abc[0].username && password == this.abc[0].password){
           console.log(username,password)
           this.router.navigate(['DashboardComponent'])
       }
       else {
           this.invalid = true;
       }
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open('this is required', 'Close', {
            duration: 2000,
         });
    }
}
