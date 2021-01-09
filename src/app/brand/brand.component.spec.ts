import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BrandComponent } from './brand.component';

describe('BrandComponent', () => {
  let component: BrandComponent;
  let fixture: ComponentFixture<BrandComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a url link and image', () => {
    expect(fixture.nativeElement.querySelector('a')).toBeTruthy()
    expect(fixture.nativeElement.querySelector('img')).toBeTruthy()
  });
});
