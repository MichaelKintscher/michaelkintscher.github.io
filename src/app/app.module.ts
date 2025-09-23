import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Material Design
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ResearchProjectComponent } from './research-project/research-project.component';
import { ResearchPageComponent } from './pages/research-page/research-page.component';
import { ResearchAreaComponent } from './research-area/research-area.component';
import { PublicationsPageComponent } from './pages/publications-page/publications-page.component';
import { PublicationComponent } from './publication/publication.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactCardComponent } from './pages/contact-card-page/contact-card-page.component';
import { ListSectionComponent } from './components/list-section/list-section.component';
import { GallerySectionComponent } from './components/gallery-section/gallery-section.component';
import { CvPageComponent } from './pages/cv-page/cv-page.component';
import { SectionedListComponent } from './components/sectioned-list/sectioned-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ResearchProjectComponent,
    ResearchPageComponent,
    ResearchAreaComponent,
    PublicationsPageComponent,
    PublicationComponent,
    HomePageComponent,
    ContactCardComponent,
    ListSectionComponent,
    GallerySectionComponent,
    CvPageComponent,
    SectionedListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatDividerModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
