import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import  {ContactService} from "./contact.service";
import {ContactFormMessage} from "./contact.interface";



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor(private contactService: ContactService ) { }

  ngOnInit(): void {
  }

  message: ContactFormMessage;

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(String(email).toLowerCase()));
    return re.test(String(email).toLowerCase());
  }



  onSubmit(form: NgForm):void{
    this.contactService.sendMessage(form.value).subscribe(message => {
      console.log(message);
    })

  }



}
