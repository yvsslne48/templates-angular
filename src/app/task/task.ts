import { Component } from '@angular/core';
import{ UpperCasePipe, DatePipe } from '@angular/common';
interface Tasks {
  id: number;
  title: string;
  DueDate: Date;
}
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  tasks: Tasks[] = [
    { id: 1, title: 'Task 1', DueDate: new Date('2023-03-13') },
    { id: 2, title: 'Task 2', DueDate: new Date('2023-03-14') },
    { id: 3, title: 'Task 3', DueDate: new Date('2023-03-15') }
  ];
}
