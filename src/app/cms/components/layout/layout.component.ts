import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{

  activeMenu = false;
  counter = 0;
  profile: User | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.user$
    .subscribe(data => {
      this.profile = data;
    })
  }

  logout() {
    this.authService.logout();
    this.profile = null;
    this.router.navigate(['/home'])
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }
}
