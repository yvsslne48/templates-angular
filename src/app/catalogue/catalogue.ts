import { Component } from '@angular/core';
import { Produits } from '../produits/produits';

@Component({
  selector: 'app-catalogue',
  imports: [Produits],
  templateUrl: './catalogue.html',
  styleUrl: './catalogue.css',
})
export class Catalogue {}
