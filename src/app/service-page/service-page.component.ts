import { Component, OnInit } from '@angular/core';

// Custom types
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ServiceCollectionInterface } from '../../types/ServiceCollection.interface';
import { FileGetterService } from '../file-getter.service';
import { ServiceExperienceInterface } from '../../types/ServiceExperience.interface';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {

  // Properties
  groupBy: string = 'parent_organization';
  dataSource = '../../assets/showcase-content/service.json';
  internalServiceCollections: ServiceCollectionInterface[] = [];
  externalServiceCollections: ServiceCollectionInterface[] = [];
  private unsubscribe$: Subject<any> = new Subject();

  constructor(private fileGetterService: FileGetterService) { }

  async ngOnInit(): Promise<void> {

    // Populate the data.
    if (this.dataSource != '') {
      this.getServiceExperiences();
    }
    else {
      console.warn("Service-Page property 'dataSource' not set!");
    }
  }

  async getServiceExperiences() {

    // Declare the list of data.
    const rawData: ServiceExperienceInterface[] = [];

    // Declare the constant for grouping by.
    let groupByPropertyName = this.groupBy as keyof ServiceExperienceInterface;

    // Get the data from the specified data source.
    this.fileGetterService.getFile(this.dataSource)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => {
        for (let element of data["items"]) {
          rawData.push(element);
        }

        let internalExperiences = rawData.filter((s) => s.service_type === 'Internal');
        // Get the list of orgs with internal service.
        let internalGroups: string[] = internalExperiences.filter((value, index, self) => 
          index === self.findIndex((t) => (
            t[groupByPropertyName] === value[groupByPropertyName]
          ))
        ).map(item => item[groupByPropertyName]);

        internalGroups.forEach(group => {
          this.internalServiceCollections.push({
            name: group,
            serviceExperiences: internalExperiences.filter((e) => e[groupByPropertyName] == group)
          });
        });

        let externalExperiences = rawData.filter((s) => s.service_type === 'External');
        // Get the list of orgs with external service.
        let externalGroups: string[] = externalExperiences.filter((value, index, self) =>
          index === self.findIndex((t) => (
            t[groupByPropertyName] === value[groupByPropertyName]
          ))
        ).map(item => item[groupByPropertyName]);

        externalGroups.forEach(group => {
          this.externalServiceCollections.push({
            name: group,
            serviceExperiences: externalExperiences.filter((e) => e[groupByPropertyName] == group)
          });
        });
      });
  }
}
