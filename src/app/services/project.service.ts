import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Project} from "../Interfaces/Project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectsRef: AngularFirestoreCollection<Project>;

  constructor(private db: AngularFirestore) {
    this.projectsRef = db.collection('Projects');
  }

  createProjectRecord(project:Project) {
    return new Promise<any>((resolve, reject) => {
      this.db
        .collection('Projects')
        .add(project)
        .then(() => {}, err => reject(err));
    });
  }

  getProjectRecords(): AngularFirestoreCollection<Project> {
    return this.projectsRef;
  }

}
