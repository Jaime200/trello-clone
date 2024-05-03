import { Component } from '@angular/core';
import { DialogRef } from "@angular/cdk/dialog"
import { ButtonComponent } from '../button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faCheckSquare, faCheckToSlot, faClock, faClose, faTag, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [ ButtonComponent, FontAwesomeModule ],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {
  public faClose = faClose;
  public faCheckToSlot = faCheckToSlot;
  public faBars = faBars;
  public faTag = faTag;
  public faCheckSquare = faCheckSquare;
  public faClock = faClock;
  public faUser = faUser;
  constructor(private dialogref : DialogRef){}
  close(){
    this.dialogref.close()
  }
}
