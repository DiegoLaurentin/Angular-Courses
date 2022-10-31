import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

import { User } from '../../../models/user.model';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  emailDefault = 'admin@mail.com'
  passwordDefault = 'admin123'

  email: string = (<HTMLInputElement>document.getElementById('email'))?.value
  password: string = (<HTMLInputElement>document.getElementById('password'))?.value

  user: User | null = null


  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  this.authService.user$
  .subscribe(data => {
    this.user = data
  })
  }

  login() {
    this.authService.loginAndGet(this.email, this.password)
    .subscribe(() => {
      this.router.navigate(['/home'])
    });
  }

}
