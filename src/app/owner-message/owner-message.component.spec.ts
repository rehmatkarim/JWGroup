import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerMessageComponent } from './owner-message.component';

describe('OwnerMessageComponent', () => {
  let component: OwnerMessageComponent;
  let fixture: ComponentFixture<OwnerMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
