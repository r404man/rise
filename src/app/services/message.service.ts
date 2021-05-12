import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  constructor(private firestore: AngularFirestore) { }

  addMsg(msg: Message) {
    let isValid: boolean = true;
    for (var prop in msg) {
      if (msg[prop].length === 0) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      return this.firestore.collection('messages').add(msg);
    }
  }

  getMessages() {
    return this.firestore.collection('messages').snapshotChanges();
  }

  getMsgDetail(id:string) {
    return this.firestore.collection('messages').doc(id).valueChanges()
  }

  deleteMessage(id:string) {
    return this.firestore.collection('messages').doc(id).delete();
  }
}
