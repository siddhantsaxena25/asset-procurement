import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-modal',
  templateUrl: './submit-modal.component.html',
  styleUrls: ['./submit-modal.component.css']
})
export class SubmitModalComponent {
  @Input() title?: string;
  @Input() message?: string;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router) {}

  onClose(): void {
    this.closeModal.emit();
    this.router.navigate([""]);
  }
}
