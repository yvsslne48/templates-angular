
import { Component } from '@angular/core';

interface Task {
  id: number;
  title: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks: Task[] = [
    { id: 1, title: 'Lire le cours Angular' },
    { id: 2, title: 'Installer le CLI' },
    { id: 3, title: 'Créer TestFlow' }
  ];

}
