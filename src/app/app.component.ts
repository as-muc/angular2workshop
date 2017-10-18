import { Component } from '@angular/core';
import { Contact } from './models/contact';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent {
  title = 'Angular Master Class setup works!';
  contact: Contact = {
 id: 1,
        name: 'Pascal Precht',
        email: 'pascal@thoughtram.io',
        phone: '+49 000 222',
        birthday: '1991-03-31',
        website: 'thoughtram.io',
        image: '/assets/images/1.jpg',
        address: {
          street: 'thoughtram road 1',
          zip: '65222',
          city: 'Hanover',
          country: 'Germany'
        }
  }

}
