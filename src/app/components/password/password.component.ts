import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router'; 
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  constructor(public userService: UserService, private router: Router, public observer: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
