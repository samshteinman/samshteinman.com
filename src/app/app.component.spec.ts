import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BrandComponent } from './brand/brand.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BrandComponent,
        AvatarComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should get github and linkedin brands', ()=> {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.brands$.subscribe(brands=> {
      expect(brands.some(brand=>brand.destinationUrl.includes("github"))).toBe(true)
      expect(brands.some(brand=>brand.destinationUrl.includes("linkedin"))).toBe(true)
    })
  })

});
