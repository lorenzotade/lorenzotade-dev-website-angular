import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../services/project.service";
import { map } from 'rxjs/operators';
import {Project} from "../../Interfaces/Project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectService: ProjectService) {
    this.getProjects();
  }

  projectsList: Project[] = [];
  loaded: boolean = false;

  ngOnInit(): void {
    this.loaded = false;
    this.getProjects();
  }

  getProjects() {
    this.loaded = false;
    this.projectService.getProjectRecords()
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map((c:any) =>
            ({ id: c.payload.doc.id, ...c.payload.doc.data() })
          )
        )
      ).subscribe(data => {
        this.projectsList = data;
        this.loaded = true
    });
  }

}
