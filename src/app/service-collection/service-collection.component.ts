import { Component, Input, OnInit } from '@angular/core';

// Custom types
import { ServiceExperienceInterface } from '../../types/ServiceExperience.interface';

@Component({
  selector: 'app-service-collection',
  templateUrl: './service-collection.component.html',
  styleUrls: ['./service-collection.component.css']
})
export class ServiceCollectionComponent implements OnInit {

  @Input() name: string = '';
  @Input() serviceExperiences: ServiceExperienceInterface[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
