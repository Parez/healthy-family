import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  state: 'login' | 'register' = 'login';
  email: string;
  password: string;
  snils: string;
  phone: string;
  name: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.state = 'login';
  }

  onRegister(): void {
    this.state = 'register';
  }

  register() {
    this.authService.register({
      email: this.email,
      password: this.password,
      snils: this.snils,
      phone: this.phone,
      name: this.name
    });
  }

  login() {
    this.authService.login({
      email: this.email,
      password: this.password
    });
  }

}
