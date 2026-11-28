import { Component, inject } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PanierService } from '../../services/panier';

@Component({
  selector: 'app-aside',
  imports: [RouterLink, KeyValuePipe],
  templateUrl: './aside.html',
  styleUrl: './aside.css',
})
export class Aside {
  panierService = inject(PanierService);
}
