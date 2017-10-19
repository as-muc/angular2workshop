import { Injectable } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data';
import { Contact } from './models/contact';
import { HttpClient } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable }  from 'rxjs/Observable';


interface ContactResponse  { item  : Contact    } 
interface ContactsResponse { items : Contact[]  } 

const API_ENDPOINT ='http://localhost:4201';

@Injectable()
export class ContactsService
{
    constructor(private http: HttpClient) { }

    getContacts() : Observable<Array<Contact>>
    {
        return this.http.get<ContactsResponse>(API_ENDPOINT + '/api/contacts/').map(data => data.items);
    }

    getContact(id: string)
    {
        return this.http.get<ContactResponse>(API_ENDPOINT + '/api/contacts/' + id).map(data => data.item);
    }

    updateContact(contact: Contact)
    {
      let targetUrl  = API_ENDPOINT + '/api/contacts/' + contact.id;
      return this.http.put(targetUrl, contact);
    }

    search(term: string) : Observable<Array<Contact>>
    {
      return this.http.get<ContactsResponse>(API_ENDPOINT + `/api/search?text=${term}`).map(data => data.items);
    }
}

