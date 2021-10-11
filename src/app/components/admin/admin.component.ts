import { Component } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { finalize } from "rxjs/operators";
import {ProjectService} from "../../services/project.service";
import {Project} from "../../Interfaces/Project";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  project: Project = {
    title: '',
    description: '',
    link: '',
    imgPath: '',
  };

  event?: any;
  msg: string = '';

  constructor(
    private authService: AuthService,
    private projectService: ProjectService,
    private afStorage: AngularFireStorage
  ) { }

  logOut() {
    this.authService.logout();
  }

  submitProject(formData: Project) {
    let project = {
      title: formData.title,
      description: formData.description,
      link: formData.link,
      imgPath: this.project.imgPath
    }
    this.projectService.createProjectRecord(project)
      .then(() => {
        this.msg = 'Il progetto è stato caricato con successo';
      })
  }

  uploadImg(formData: Project, event: any) {
    const filePath = `project_screen/${event.target.files[0].name.split('.').splice(0,1).join()}_${new Date().getTime()}`;
    const fileRef = this.afStorage.ref(filePath)
    this.afStorage.upload(filePath, event.target.files[0]).snapshotChanges()
      .pipe(finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.project.imgPath = url;
          this.submitProject(formData)
        })
      }))
      .subscribe();

    //this.imgPath = this.afStorage.ref()
  }

}
