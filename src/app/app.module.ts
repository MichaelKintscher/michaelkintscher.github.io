import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentShowcaseComponent } from './content-showcase/content-showcase.component';
import { ShowcaseContainerComponent } from './showcase-container/showcase-container.component';
import { HttpClientModule } from '@angular/common/http';

// Material Design
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { ResearchProjectComponent } from './research-project/research-project.component';
import { EducationTileComponent } from './education-tile/education-tile.component';
import { ListShowcaseComponent } from './list-showcase/list-showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileSidebarComponent,
    ContentShowcaseComponent,
    ShowcaseContainerComponent,
    ResearchProjectComponent,
    EducationTileComponent,
    ListShowcaseComponent
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
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
