import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navbar/home/home.component';
import { PortfolioComponent } from './navbar/portfolio/portfolio.component';
import { ResumeComponent } from './navbar/resume/resume.component';
import { ContactComponent } from './navbar/contact/contact.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'portfolio', component:PortfolioComponent},
  {path:'resume', component:ResumeComponent},
  {path:'contact', component:ContactComponent},
  {path:'**', component:HomeComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
