import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseContainerComponent } from './showcase-container.component';

describe('ShowcaseContainerComponent', () => {
  let component: ShowcaseContainerComponent;
  let fixture: ComponentFixture<ShowcaseContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcaseContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
