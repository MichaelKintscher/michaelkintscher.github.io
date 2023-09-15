import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchAreaComponent } from './research-area.component';

describe('ResearchAreaComponent', () => {
  let component: ResearchAreaComponent;
  let fixture: ComponentFixture<ResearchAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
