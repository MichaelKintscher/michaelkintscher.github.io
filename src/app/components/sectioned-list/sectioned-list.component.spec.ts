import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionedListComponent } from './sectioned-list.component';

describe('SectionedListComponent', () => {
  let component: SectionedListComponent;
  let fixture: ComponentFixture<SectionedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
