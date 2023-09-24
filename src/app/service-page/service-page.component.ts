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
  dataCache: ServiceExperienceInterface[] = [];
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

    // Get the data from the specified data source.
    this.fileGetterService.getFile(this.dataSource)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => {
        for (let element of data["items"]) {
          this.dataCache.push(element);
        }

        this.refreshServiceExperienceDisplay();
      });
  }

  refreshServiceExperienceDisplay() {

    // Declare the constant for grouping by.
    type KeysOfType<T, V> = keyof {
      [P in keyof T as T[P] extends V ? P : never]: any
    }
    let groupByPropertyName = this.groupBy as KeysOfType<ServiceExperienceInterface, string>;

    // Divide up the list of all experiences by internal vs external.
    let internalExperiences = this.dataCache.filter((s) => s.service_type === 'Internal');
    let externalExperiences = this.dataCache.filter((s) => s.service_type === 'External');

    // Check if the groupby is tags. Tags are a different data type, so must be handled differently.
    if (this.groupBy == 'tags') {
      // The tags property is a collection of strings.

      // Get the list of orgs with internal service.

      // Get a list of all tags.
      let allInternalTags: string[] = [];
      internalExperiences.forEach((e) => {
        e.tags.forEach((t) => {
          allInternalTags.push(t);
        });
      });

      // Remove duplicate tags.
      let uniqueInternalTags: string[] = allInternalTags.filter((value, index, self) =>
        index === self.findIndex((t) => (
          t === value
        ))
      );

      uniqueInternalTags.forEach(tag => {
        this.internalServiceCollections.push({
          name: tag,
          serviceExperiences: internalExperiences.filter((e) => e[groupByPropertyName].indexOf(tag) > -1)
        });
      });

      // Get the list of orgs with external service.

      // Get a list of all tags.
      let allExternalTags: string[] = [];
      externalExperiences.forEach((e) => {
        e.tags.forEach((t) => {
          allExternalTags.push(t);
        });
      });

      // Remove duplicate tags.
      let uniqueExternalTags: string[] = allExternalTags.filter((value, index, self) =>
        index === self.findIndex((t) => (
          t === value
        ))
      );

      uniqueExternalTags.forEach(tag => {
        this.externalServiceCollections.push({
          name: tag,
          serviceExperiences: externalExperiences.filter((e) => e[groupByPropertyName].indexOf(tag) > -1)
        });
      });
    }
    else {
      // All other properties are of type string.

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
    }
  }
}
