import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingPageComponent } from './teaching-page.component';

describe('TeachingPageComponent', () => {
  let component: TeachingPageComponent;
  let fixture: ComponentFixture<TeachingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
