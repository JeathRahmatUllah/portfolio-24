import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { environment } from '../../environments';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  app: any;
  db: any;
  constructor() {
    this.app = initializeApp(environment.firebase);
    this.db = getFirestore(this.app);
  }
  async getPort() {
    const portCol = collection(this.db, 'portCollection');
    const portDoc = await getDocs(portCol);
  
    const portList = portDoc.docs.map((doc) => doc.data());
    return portList;
  }
  async getProjects() {
    const portCol = collection(this.db, 'projects');
    const portDoc = await getDocs(portCol);
  
    const portList = portDoc.docs.map((doc) => doc.data());
    return portList;
  }
  async getCertificates() {
    const portCol = collection(this.db, 'certificates');
    const portDoc = await getDocs(portCol);
  
    const portList = portDoc.docs.map((doc) => doc.data());
    return portList;
  }

}


