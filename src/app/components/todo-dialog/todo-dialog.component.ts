import { Component, Inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from "@angular/cdk/dialog"
import { ButtonComponent } from '../button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faCheckSquare, faCheckToSlot, faClock, faClose, faTag, faUser } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../../models/todo.model';
interface InputData{
  todo: Todo
}
interface OutputData{
  rta: boolean
}
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
  todo: Todo;

  constructor(private dialogref : DialogRef<OutputData>,
    @Inject(DIALOG_DATA) private data: InputData
  ){
    this.todo = data.todo
  }
  close(){
    this.dialogref.close({
      rta: true
    })
  }
}
