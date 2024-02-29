import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {id: 0, name: 'Sample Angular App', summary: 'An Angular application', description: '', projectLink: '', pictures: ["../../assets/img.jpg","../../assets/img.jpg","../../assets/img.jpg"], tags: [Tag.ANGULAR,Tag.CYPRESS]},
    {id: 1, name: 'Selenium App', summary: 'An Angular application', description: '', projectLink: '', pictures: [], tags: [Tag.Selenium,Tag.TESTNG]},
    {id: 2, name: 'Java App', summary: 'An Angular application', description: '', projectLink: '', pictures: [], tags: [Tag.JAVA,Tag.SPRINGBOOT]},
    {id: 3, name: 'TestNg App', summary: 'An Angular application', description: '', projectLink: '', pictures: [], tags: [Tag.TESTNG,Tag.Selenium]},
    {id: 4, name: 'SpringBoot App', summary: 'An Angular application', description: '', projectLink: '', pictures: [], tags: [Tag.SPRINGBOOT,Tag.SQL]},
    {id: 5, name: 'Cypress App', summary: 'An Angular application', description: '', projectLink: '', pictures: [], tags: [Tag.CYPRESS,Tag.ANGULAR]},
    {id: 6, name: 'Cucumber App', summary: 'An Angular application', description: '', projectLink: '', pictures: [], tags: [Tag.CUCUMBER,Tag.SQL]},

      
  ];

  constructor() {  }
  GetProjects(){
    return this.projects;
  }
  GetProjectById(id: number): Project{
    let project = this.projects.find(project => project.id === id);
    if(project === undefined){
      throw new TypeError('There is no project that matches the id: '+ id);
    }
    return project;
  }
}
