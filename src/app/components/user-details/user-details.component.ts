import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import User from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnChanges {

  @Input() user?: User;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentUser: User = {
    firstname: '',
    lastname: '',
    email:'',
    password: '',
    cardnumber: '',
    phonenumber:'',
    adress: '',
    activated: false
  };
  message = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentUser = { ...this.user };
  }

  updateActivated(status: boolean): void {
    if (this.currentUser.key) {
      this.userService.update(this.currentUser.key, { activated: status })
      .then(() => {
        this.currentUser.activated = status;
        if (status == false){
          this.message = 'The user was blocked successfully!';
        }
        else{
          this.message = 'The user was unblocked successfully!';
        }
      })
      .catch(err => console.log(err));
    }
  }

  updateUser(): void {
    const data = {
      firstname: this.currentUser.firstname,
      lastname: this.currentUser.lastname,
      cardnumber: this.currentUser.cardnumber,
      phonenumber: this.currentUser.phonenumber,
      email: this.currentUser.email,
      password: this.currentUser.password,
      adress: this.currentUser.adress
    };

    if (this.currentUser.key) {
      this.userService.update(this.currentUser.key, data)
        .then(() => this.message = 'The user was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteUser(): void {
    if (this.currentUser.key) {
      this.userService.delete(this.currentUser.key)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The user was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }
}
