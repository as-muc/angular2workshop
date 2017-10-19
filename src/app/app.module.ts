import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactsAppComponent } from './app.component';
import { ContactsService } from './contacts.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail-component/contacts-detail-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactsEditorComponent } from './contacts-editor-component/contacts-editor-component.component';
import { FormsModule } from '@angular/forms';

 
@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactsDetailComponent, ContactsEditorComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [ContactsAppComponent],
  providers: [{ provide: ContactsService, useClass: ContactsService },
              { provide: 'API_ENDPOINT', useValue: 'http://localhost:4201/api'}
             ]
})
export class ContactsModule {

}
