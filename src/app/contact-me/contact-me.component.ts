import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  contactMe : ContactMeInformation;

  contactMeForm : FormGroup = new FormGroup({
    message: new FormControl(''),
    email: new FormControl('')
  });

  constructor(){}

  ngOnInit(): void {
  }

  get message() { return this.contactMeForm.get('message'); }
  get email() { return this.contactMeForm.get('email'); }

  onSubmit()
  {
    console.log('submitting!');
  }
}

export interface ContactMeInformation{
  email : string;
  message : string;
}