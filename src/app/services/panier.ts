import { Injectable, computed, signal } from '@angular/core';
import { Produit } from './produit.model';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  produits = signal<Produit[]>([]);

  total = computed(() => this.calculerTotal());

  nombreArticles = computed(() => this.produits().length);

  ajouter(produit: Produit) {
    this.produits.update((liste) => [...liste, produit]);
  }

  vider() {
    this.produits.set([]);
  }

  calculerTotal(): number {
    return this.produits().reduce((somme, produit) => somme + produit.prix, 0);
  }

  compterProduits(): Record<string, number> {
    const compteur: Record<string, number> = {};
    for (const produit of this.produits()) {
      compteur[produit.nom] = (compteur[produit.nom] ?? 0) + 1;
    }
    return compteur;
  }
}
