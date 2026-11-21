import { Component } from '@angular/core';

interface Task {
  id: number;
  title: string;
  dueDate: string;
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks: Task[] = [
    { id: 0, title: 'Lire le cours Angular', dueDate: '13-11-2026' },
    { id: 1, title: 'Installer le CLI', dueDate: '14-11-2026' },
    { id: 2, title: 'Créer TaskFlow', dueDate: '15-11-2026' },
  ];

  clearTasks() {
    this.tasks = [];
  }
}
