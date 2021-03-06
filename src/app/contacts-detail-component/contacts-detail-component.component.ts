import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';



@Component({
  selector: 'trm-contacts-detail-component',
  templateUrl: './contacts-detail-component.component.html',
  styleUrls: ['./contacts-detail-component.component.css']
})
export class ContactsDetailComponent implements OnInit {
  contact: Contact;
  constructor(private route: ActivatedRoute, private contactsService: ContactsService) {}

  ngOnInit()
  {
    let id = this.route.snapshot.params['id'];
    this.contactsService.getContact(id).subscribe(foo => this.contact = foo);

//    this.contact = this.contactsService.getContact(id);


  }

}
