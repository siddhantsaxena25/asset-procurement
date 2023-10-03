import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private firestore: AngularFirestore) { }

  async sendConfirmationEmail(emailData: { to: string[], message: { subject: string, text: string, html: string } }) {
    await this.firestore.collection('mail').add(emailData);
  }

  async sendITApprovalEmail(emailData: { to: string[], message: { subject: string, text: string, html: string } }) {
    await this.firestore.collection('ITapprovals').add(emailData);
  }
}
