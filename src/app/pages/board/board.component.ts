import { Component } from '@angular/core';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Column, Todo } from '../../models/todo.model';
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
    .shrink-custom{
      flex-shrink: 0;
    }

    .overflow-x-custom{
      overflow-x: scroll 
    }

    ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: rgba(156, 163, 175, var(--tw-bg-opacity));
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
    border-radius: 4px;
  }
  
  /* Agrega un efecto hover a la barra de desplazamiento */
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(107, 114, 128, var(--tw-bg-opacity));
  }
    `
  ]
})
export class BoardComponent {
  columns: Column[]= [
    {
      title:'To do',
      todos :  [
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
    },
    {
      title: 'Doing',
      todos: [ {
        id: 4,
        title: 'Tarea por hacer'
      }
      ]
    },
    {
      title:'Done',
      todos: [
        {
          id: 5,
          title: 'Tarea finalizada'
        },
      ]
    }
  ]
  
  drop(event:CdkDragDrop<Todo[]>){
    if(event.previousContainer ===event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex )
    }else{
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }
    
  }

  addColumn(){
    this.columns.push({
      title :'New',
      todos: []
    })
  }
}
