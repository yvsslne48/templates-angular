import { Component } from '@angular/core';
import { HeaderPanier } from '../../layout/header-panier/header-panier';
import { Aside } from '../../layout/aside/aside';
import { Footer } from '../../layout/footer/footer';
import { Catalogue } from '../../catalogue/catalogue';

@Component({
  selector: 'app-boutique',
  imports: [HeaderPanier, Aside, Footer, Catalogue],
  templateUrl: './boutique.html',
  styleUrl: './boutique.css',
})
export class Boutique {}
