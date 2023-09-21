import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PublicationsPageComponent } from './publications-page/publications-page.component';
import { ResearchPageComponent } from './research-page/research-page.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { TeachingPageComponent } from './teaching-page/teaching-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'research',
    component: ResearchPageComponent
  },
  {
    path: 'publications',
    component: PublicationsPageComponent
  },
  {
    path: 'teaching',
    component: TeachingPageComponent
  },
  {
    path: 'service',
    component: ServicePageComponent
  },
  {
    path: '',
    redirectTo: "/home",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
