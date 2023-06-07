import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit{

  registrationForm: FormGroup;  

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      'full_name': new FormControl(null, [Validators.required]),
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),
      'profile_picture': new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    console.log(this.registrationForm);
    
  }
}
