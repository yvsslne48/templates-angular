import { Component, inject } from '@angular/core';
import { PanierService } from '../services/panier';
import { Produit } from '../services/produit.model';

@Component({
  selector: 'app-produits',
  imports: [],
  templateUrl: './produits.html',
  styleUrl: './produits.css',
})
export class Produits {
  panierService = inject(PanierService);

  produits: Produit[] = [
    { id: 1, nom: 'Casque audio', prix: 249 },
    { id: 2, nom: 'Souris sans fil', prix: 89 },
    { id: 3, nom: 'Clavier mécanique', prix: 259 },
    { id: 4, nom: 'Tapis de souris', prix: 59 },
  ];
}
