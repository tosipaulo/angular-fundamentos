import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { AuthService } from "../../core/auth.service";

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{

    loginForm: FormGroup;
    
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router
    ){}
    
    ngOnInit() {
       this.loginForm = this.formBuilder.group({
           username: ['', Validators.required],
           password: ['', Validators.required]
       })
    }

    login(){
        const userName = this.loginForm.get('username').value;
        const password = this.loginForm.get('password').value;
        
        this.authService.authenticate(userName, password)
            .subscribe(
                () => {
                    this.router.navigate(['user', userName])
                },
                (err) => {
                    this.loginForm.reset();
                    console.log('Error')
                }
            )
    }

}