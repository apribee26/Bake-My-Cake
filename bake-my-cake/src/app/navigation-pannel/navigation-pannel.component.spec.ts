import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPannelComponent } from './navigation-pannel.component';

describe('NavigationPannelComponent', () => {
  let component: NavigationPannelComponent;
  let fixture: ComponentFixture<NavigationPannelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationPannelComponent]
    });
    fixture = TestBed.createComponent(NavigationPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
