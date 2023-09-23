import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCollectionComponent } from './service-collection.component';

describe('ServiceCollectionComponent', () => {
  let component: ServiceCollectionComponent;
  let fixture: ComponentFixture<ServiceCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
