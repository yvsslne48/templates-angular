import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { PanierService } from '../../services/panier';

@Component({
  selector: 'app-header-panier',
  imports: [CurrencyPipe],
  templateUrl: './header-panier.html',
  styleUrl: './header-panier.css',
})
export class HeaderPanier {
  panierService = inject(PanierService);
}
