import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact';
import { ContactsService } from './contacts.service';


@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent implements OnInit {
  title = 'Angular Master Class setup works!';
  contacts: Contact[];
  constructor( private contactsService:ContactsService){}

  ngOnInit()
  {
     this.contactsService.getContacts().subscribe(contacts => {
          this.contacts = contacts;
      });;
  }
}
