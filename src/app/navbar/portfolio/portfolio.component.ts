import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from 'src/app/_models/Project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  project: Project = {
    id: 0,
    name: 'Sample Angular App',
    summary: 'An Angular application',
    description: '',
    projectLink: '',
    pictures: [],
    tags: ['Angular','Selenium']
  }
  constructor(private titleservice: Title){
    this.titleservice.setTitle('SAM-Portfolio')
  }

}
