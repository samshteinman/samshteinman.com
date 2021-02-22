import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrandComponent } from '../brand/brand.component';

import { HeaderNavComponent } from './header-nav.component';

describe('HeaderNavComponent', () => {
  let component: HeaderNavComponent;
  let fixture: ComponentFixture<HeaderNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatToolbarModule],
      declarations: [ HeaderNavComponent, BrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should have github, linkedin, apple brands', ()=> {
    const fixture = TestBed.createComponent(HeaderNavComponent);
    const app = fixture.componentInstance;
    expect(app.brands.some(brand=>brand.destinationUrl.includes("github"))).toBe(true)
    expect(app.brands.some(brand=>brand.destinationUrl.includes("linkedin"))).toBe(true)
    expect(app.brands.some(brand=>brand.destinationUrl.includes("apple"))).toBe(true)
  })

});
