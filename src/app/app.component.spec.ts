import { TestBed, waitForAsync } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BrandComponent } from './brand/brand.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ MatToolbarModule ],
      declarations: [
        AppComponent,
        BrandComponent,
        AvatarComponent,
        HeaderNavComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
