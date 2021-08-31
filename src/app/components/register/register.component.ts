import { Component, OnInit } from '@angular/core';
import {FormGroup, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
