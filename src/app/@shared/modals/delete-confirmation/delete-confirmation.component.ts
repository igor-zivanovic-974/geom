import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss'],
})
export class DeleteConfirmationComponent implements OnInit {
  @Input() question: string;
  @Input() title: string;
  @Output() response = new EventEmitter<boolean>();

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  confirm() {
    this.response.emit(true);
    this.activeModal.close();
  }

  cancel() {
    this.response.emit(false);
    this.activeModal.close();
  }
}
