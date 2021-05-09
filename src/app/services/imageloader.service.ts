import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})

export class ImageloaderService {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  constructor(private fireStorage: AngularFireStorage) { };

  metadata = {
    contentType: 'image/jpg'
  };


  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.fireStorage.ref(id);
    console.log(event.target.files);
    this.task = this.ref.put(event.target.files[0]);
  }

}
