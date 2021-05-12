import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask, GetDownloadURLPipe } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project';


@Injectable({
  providedIn: 'root'
})

export class ImageloaderService {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  percent: Observable<number>;

  storageUrl: string = 'gs://leafy-racer-310911.appspot.com/';

  projectsArr: Observable<Project[]>;

  constructor(private fireStorage: AngularFireStorage, private fireStore: AngularFirestore) { };

  upload(project) {
    // Image array from FileList Object
    const album = Object.values(project.projectImages);

    const id = Math.random().toString(36).substring(2);
    const thumbPath = `${id}/projectThumb`;
    const albumPath = `${id}/`;

    // Add field to db
    this.fireStore.collection('projects').doc(id).set(project.projectInfo);

    // Uppload thumb
    this.ref = this.fireStorage.ref(thumbPath);
    this.task = this.ref.put(project.projectThumb);

    // Uppload album
    for (let i = 0; i < album.length; i++) {
      this.ref = this.fireStorage.ref(albumPath + i.toString());
      this.task = this.ref.put(album[i]);
    }

    this.percent = this.task.percentageChanges();

  }

  // Data for project-list 
  getProjects() {
    return this.fireStore.collection('projects').snapshotChanges();
  }

  getProjectThumb(id: string) {
    return this.fireStorage.refFromURL(`gs://leafy-racer-310911.appspot.com/${id}/projectThumb`).getDownloadURL()
  }


  getProjectDetail(id: string) {
    return this.fireStore.collection('projects').doc(id).get();
  }

  getImages(id: string) {
    return this.fireStorage.refFromURL(`gs://leafy-racer-310911.appspot.com/${id}/`).listAll();
  }

  deleteProject(id: string) {
    this.getImages(id).subscribe(
      data => {
        data.items.map(
          val => {
            val.delete();
          }
        )
      }
    );
    this.fireStore.collection('projects').doc(id).delete();
  }

  deleteThumb(id: string) {
    return this.fireStorage.refFromURL(`gs://leafy-racer-310911.appspot.com/${id}/projectThumb`).delete();
  }

  setThumb(id: string, filePath) {
    const thumbPath = `${id}/projectThumb`
    this.ref = this.fireStorage.ref(thumbPath);
    this.task = this.ref.put(filePath);
    return this.task.percentageChanges();
  }

  deleteImage(id: string, imgName: string) {
    return this.fireStorage.refFromURL(`gs://leafy-racer-310911.appspot.com/${id}/${imgName}`).delete();
  }

  editData(id: string, data) {
    console.log(data);
    return this.fireStore.collection('projects').doc(id).set(data);
  }

  editImages(imgFiles, id) {
    const album = Object.values(imgFiles);
    console.log(album);
    const albumPath = `${id}/`;

    for (let i = 0; i < album.length; i++) {
      this.ref = this.fireStorage.ref(albumPath + i.toString());
      this.task = this.ref.put(album[i]);
    }

    return this.task.percentageChanges();
  }
}
