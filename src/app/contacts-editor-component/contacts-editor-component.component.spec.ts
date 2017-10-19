import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsEditorComponentComponent } from './contacts-editor-component.component';

describe('ContactsEditorComponentComponent', () => {
  let component: ContactsEditorComponentComponent;
  let fixture: ComponentFixture<ContactsEditorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsEditorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsEditorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
