import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { UserService } from 'src/app/services/user.service';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import {FormGroup, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form!: FormGroup;

  constructor(public observer: BreakpointObserver,  private userService: UserService, public afAuth: AngularFireAuth, public router: Router) { }

  ngOnInit(): void {
  }

}
