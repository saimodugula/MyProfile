import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from 'src/app/_models/Project';
import { Tag } from 'src/app/_models/Tag';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[]; 
  constructor(private titleservice: Title, private projectService: ProjectsService){
    this.titleservice.setTitle('SAM-Portfolio')
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

}
