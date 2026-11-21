import { Component, computed, effect, signal } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  articles = signal<Article[]>([
    { id: 1, title: 'Course 1', bought: false },
    { id: 2, title: 'Course 2', bought: true },
    { id: 3, title: 'Course 3', bought: false },
  ]);

  new = signal('');

  availableArticles = computed(() => this.articles().filter((article) => !article.bought));

  emptyStock = computed(() => this.availableArticles().length === 0);

  constructor() {
    effect(() => {
      console.log('Available articles:', this.availableArticles());
    });
  }

  addArticle() {
    const nom = this.new();
    this.articles.update((articles) => [...articles, { id: articles.length + 1, title: nom, bought: false }]);
    this.new.set('');
  }

  emptyArticles() {
    this.articles.set([]);
  }
}
