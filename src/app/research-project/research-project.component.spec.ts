import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchProjectComponent } from './research-project.component';

describe('ResearchProjectComponent', () => {
  let component: ResearchProjectComponent;
  let fixture: ComponentFixture<ResearchProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
