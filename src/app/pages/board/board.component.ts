import { Component } from '@angular/core';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Todo } from '../../models/todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [ DragDropModule, NavbarComponent, CommonModule ],
  templateUrl: './board.component.html',
  styles: [
    `
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }

    .min-he-2{
      min-height: 2.5rem
    }
    `
  ]
})
export class BoardComponent {
  todoList: Todo[] = [
    {
      id: 1,
      title: 'Tarea 1'
    },
    {
      id: 2,
      title: 'Tarea 2'
    },
    {
      id: 1,
      title: 'Tarea 3'
    },
  ]

  doing: Todo[] = [ {
    id: 4,
    title: 'Tarea por hacer'
  }
  ]
  done: Todo[] = [
    {
      id: 5,
      title: 'Tarea finalizada'
    },
  ]
  drop(event:CdkDragDrop<Todo[]>){
    if(event.previousContainer ===event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex )
    }else{
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }
    
  }
}
