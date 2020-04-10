import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UserService) { }

  public user = {
    email: '',
    password: '',
    password2: '',
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userService.Register(this.user)
  }
}
