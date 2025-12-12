import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsReferencePageComponent } from './elements-reference-page.component';

describe('ElementsReferencePageComponent', () => {
  let component: ElementsReferencePageComponent;
  let fixture: ComponentFixture<ElementsReferencePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementsReferencePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementsReferencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
