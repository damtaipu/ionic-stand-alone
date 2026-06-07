import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HomePage],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the page', () => {
    expect(component).toBeTruthy();
  });

  it('should render the Ionic components documentation link', () => {
    const link: HTMLAnchorElement | null = fixture.nativeElement.querySelector('a');

    expect(link).withContext('documentation link').not.toBeNull();
    expect(link?.href).toBe(component.componentsLink.url);
    expect(link?.textContent?.trim()).toBe(component.componentsLink.label);
  });
});
