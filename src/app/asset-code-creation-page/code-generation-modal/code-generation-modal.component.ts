import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-code-generation-modal',
  templateUrl: './code-generation-modal.component.html',
  styleUrls: ['./code-generation-modal.component.css']
})
export class CodeGenerationModalComponent {
  @Input() title?: string;
  @Input() message?: string;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  onClose(): void {
    this.closeModal.emit();
  }
}
