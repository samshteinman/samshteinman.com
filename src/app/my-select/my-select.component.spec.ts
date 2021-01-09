import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MySelectComponent } from './my-select.component';

describe('MySelectComponent', () => {
  let component: MySelectComponent;
  let fixture: ComponentFixture<MySelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
