import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSlidersComponent } from './client-sliders.component';

describe('ClientSlidersComponent', () => {
  let component: ClientSlidersComponent;
  let fixture: ComponentFixture<ClientSlidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSlidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
