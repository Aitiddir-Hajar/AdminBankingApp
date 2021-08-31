import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  public form!: FormGroup;

  user: User = new User();
  submitted = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  saveUser(): void {
    this.userService.create(this.user).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

}
