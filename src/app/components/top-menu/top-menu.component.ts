import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService, User} from '../../services/auth.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  user: User;
  constructor(private router: Router, private authService: AuthService) {
    this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
  }

  navigateToMain(): void {
    this.router.navigate(['/app']);
  }

}
