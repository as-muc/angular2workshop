//import { Routes }   from '@angular/route';
import { ContactsListComponent }   from './contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail-component/contacts-detail-component.component';
import { ContactsEditorComponent } from './contacts-editor-component/contacts-editor-component.component';

export const APP_ROUTES =
[
  { path: '',                  component: ContactsListComponent },
  { path: 'contact/:id',       component: ContactsDetailComponent },
  { path: 'contact/:id/edit', component: ContactsEditorComponent },
  
  { path: '**', redirectTo: '/' },

]