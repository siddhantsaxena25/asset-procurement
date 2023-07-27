import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { ApprovalRequestData } from '../models/approval-request-data.model';

@Injectable({
  providedIn: 'root'
})
export class ApprovalRequestDataService {
  private dbPath = '/assetApprovals'

  approvalRequestsRef!: AngularFireList<ApprovalRequestData>
  
  constructor(private db: AngularFireDatabase) {
    this.approvalRequestsRef = db.list(this.dbPath)
  }

  getAll(): AngularFireList<ApprovalRequestData> {
    return this.approvalRequestsRef
  }

  create(approvalRequestData: ApprovalRequestData): any {
    return this.approvalRequestsRef.push(approvalRequestData);
  }

  update(key: string, value: any): Promise<void> {
    return this.approvalRequestsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.approvalRequestsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.approvalRequestsRef.remove();
  }
}
