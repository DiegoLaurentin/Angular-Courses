import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

import { User } from '../../../models/user.model';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  profile: User | null = null

  constructor(
    private authService: AuthService,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
  this.authService.user$
  .subscribe(data => {
    this.profile = data
  })


  }

}
