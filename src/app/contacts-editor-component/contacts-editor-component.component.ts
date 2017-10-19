import { Component, OnInit } from '@angular/core';
import { ContactsService }  from '../contacts.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';


@Component({
  selector: 'trm-contacts-editor-component',
  templateUrl: './contacts-editor-component.component.html',
  styleUrls: ['./contacts-editor-component.component.css']
})

// ContactsService, ActivatedRoute and Router
//@Injectable()
export class ContactsEditorComponent implements OnInit {
  contact: Contact = <Contact>{ address: {}};
  constructor(private route: ActivatedRoute,
              private contactsService:ContactsService,
              private router:Router) { }

  ngOnInit()
  {
    let id = this.route.snapshot.params['id'];
    this.contactsService.getContact(id).subscribe(foo => this.contact = foo);
  }

  cancel(contact:Contact)
  {
    this.gotoDetail(contact);
  }

  private gotoDetail(contact: Contact)
  {
    this.router.navigate(['../'], {relativeTo: this.route });
  }

  save(contact:Contact)
  {
    this.contactsService.updateContact(contact).subscribe(() => this.gotoDetail(contact))
  }

}
