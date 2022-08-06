import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationTileComponent } from './education-tile.component';

describe('EducationTileComponent', () => {
  let component: EducationTileComponent;
  let fixture: ComponentFixture<EducationTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
