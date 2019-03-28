import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TallFooterComponent } from './tall-footer.component';

describe('TallFooterComponent', () => {
  let component: TallFooterComponent;
  let fixture: ComponentFixture<TallFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TallFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
