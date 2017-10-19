//import { Routes }   from '@angular/route';
import { ContactsListComponent }   from './contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail-component/contacts-detail-component.component';

export const APP_ROUTES =
[
  { path: '', component: ContactsListComponent },
  { path: 'contact/:id', component: ContactsDetailComponent },
  { path: '**', redirectTo: '/' },

]