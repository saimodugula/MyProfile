import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from 'src/app/_models/Project';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  featuredProject = {} as Project;
  constructor(private titleservice: Title, private projectService: ProjectsService){
    this.titleservice.setTitle('SAM-Home')
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(0);
  }
  

}
