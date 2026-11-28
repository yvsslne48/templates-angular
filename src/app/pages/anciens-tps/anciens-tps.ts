import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Home } from '../../home/home';
import { About } from '../../about/about';
import { Header } from '../../header/header';
import { Task } from '../../task/task';
import { Courses } from '../../courses/courses';

@Component({
  selector: 'app-anciens-tps',
  imports: [RouterLink, Home, About, Header, Task, Courses],
  templateUrl: './anciens-tps.html',
  styleUrl: './anciens-tps.css',
})
export class AnciensTps {}
