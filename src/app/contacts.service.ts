import { Injectable } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data';
import { Contact } from './models/contact';

@Injectable()
export class ContactsService {
      contacts: Contact[] = CONTACT_DATA;

  //constructor() { }
  getContacts() :Contact[]
  {
      return this.contacts;
  }
}