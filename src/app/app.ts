import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Header } from './header/header';
import { Task } from './task/task';
import { Courses } from './courses/courses';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Home,About,Header,Task,Courses],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-test');
}
