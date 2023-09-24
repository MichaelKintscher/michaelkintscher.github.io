import { Component, Input, OnInit } from '@angular/core';
import { ServiceExperienceInterface } from '../../types/ServiceExperience.interface';

@Component({
  selector: 'app-service-tile',
  templateUrl: './service-tile.component.html',
  styleUrls: ['./service-tile.component.css']
})
export class ServiceTileComponent implements OnInit {

  @Input() experience: ServiceExperienceInterface = {
    position: 'Position',
    organization: 'Organization',
    parent_organization: 'Parent Organization',
    service_type: "Service Type",
    start_date: "Start Date",
    end_date: "End Date",
    tags: ["Tag"]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
