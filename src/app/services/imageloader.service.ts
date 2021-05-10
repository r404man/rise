import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ImageloaderService {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  percent: Observable<number>;

  constructor(private fireStorage: AngularFireStorage, private fireStore: AngularFirestore) { };

  upload(project) {
    // Image array from FileList Object
    const album = Object.values(project.projectImages);

    const id = Math.random().toString(36).substring(2);
    const thumbPath = `${id}/thumbImage/projectThumb`;
    const albumPath = `${id}/album/`;

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


  getProject() {

  }
}
