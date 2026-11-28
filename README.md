# TP Angular 5GI : Ma Boutique

Projet Angular 21 (composants standalone, signals, services, routing) réalisé au fil des séances du cours Angular 5GI.

- **`/`** : le projet actuel, une boutique avec un catalogue et un panier.
- **`/anciens-tps`** : les TPs des premières séances, regroupés sur une seule page.

## Lancer le projet

```bash
npm install
ng serve
```

Puis ouvrir http://localhost:4200.

---

## Architecture de la page boutique

Chaque partie de la page est un composant séparé :

```
┌──────────────────── HeaderPanier ────────────────────┐
│ Ma Boutique          panier : 3 articles - MAD557.00 │
├───────────┬──────────────────────────────────────────┤
│  Aside    │  Catalogue                               │
│           │  └── Produits (cartes)                   │
├───────────┴──────────────────────────────────────────┤
│                       Footer                         │
└──────────────────────────────────────────────────────┘
```

| Partie | Composant | Rôle |
|---|---|---|
| header + panier | `layout/header-panier` | Nom de la boutique, résumé du panier (nombre d'articles + total), bouton « Vider le panier » |
| aside | `layout/aside` | Liens de navigation (Catalogue, Anciens TPs) et nombre de chaque produit dans le panier |
| catalogue | `catalogue` | Titre « Catalogue », contient le composant `Produits` |
| produits | `produits` | Liste des produits en cartes, bouton « Ajouter au panier » |
| footer | `layout/footer` | Pied de page |

La page `pages/boutique` assemble ces composants avec une grille CSS (`grid-template-areas`). Sur un petit écran, les parties s'empilent.

## Structure des fichiers

```
src/app/
├── app.ts / app.html        Composant racine, contient seulement <router-outlet />
├── app.routes.ts            Routes de l'application
├── pages/
│   ├── boutique/            Page « / » : assemble header, aside, catalogue, footer
│   └── anciens-tps/         Page « /anciens-tps » : regroupe les anciens TPs
├── layout/
│   ├── header-panier/       Haut de page + résumé du panier
│   ├── aside/               Colonne de gauche
│   └── footer/              Pied de page
├── catalogue/               Section catalogue
├── produits/                Cartes des produits
├── services/
│   ├── panier.ts            Service PanierService (logique du panier)
│   └── produit.model.ts     Interface Produit
├── courses/                 TP signals
├── task/                    TP @if / @for (liste de tâches)
├── task-list/               Variante personnelle de la liste de tâches (non affichée)
├── header/                  TP event binding / property binding (TaskFlow)
├── home/                    TP interpolation
└── about/                   Premier composant
```

## Routing (`app.routes.ts`)

| Chemin | Composant | Description |
|---|---|---|
| `''` | `Boutique` | Page principale |
| `'anciens-tps'` | `AnciensTps` | Tous les anciens TPs |
| `'**'` | redirection vers `''` | Une adresse inconnue renvoie vers la boutique |

---

## Les séances

### Séance 1 : composants, interpolation, event binding, property binding

- **`home`** : interpolation `{{ }}` pour afficher du texte.
- **`header`** (TaskFlow) :
  - **event binding** : `(click)="rename()"` change le titre.
  - **property binding** : `[disabled]="!canDelete"` désactive le bouton « Supprimer » tant que le titre n'a pas été renommé.
- **`task`** : boucle `@for (task of tasks; track task.id)` et condition `@if / @else` pour afficher un message quand la liste est vide.

### Séance 2 : signals (`courses`)

- **`signal()`** : une valeur réactive. On la lit avec `articles()` et on la modifie avec `.set()` ou `.update()`.
  ```ts
  articles = signal<Article[]>([...]);
  new = signal('');
  ```
- **`computed()`** : une valeur calculée à partir d'autres signals, recalculée automatiquement.
  ```ts
  availableArticles = computed(() => this.articles().filter(a => !a.bought));
  emptyStock = computed(() => this.availableArticles().length === 0);
  ```
- **`effect()`** : du code qui se relance à chaque changement d'un signal qu'il lit. Ici, il affiche les articles disponibles dans la console.
- **Ajout d'un article** : le champ texte est lié au signal `new`, et la touche Entrée (`(keyup.enter)`) appelle `addArticle()`.
- **Remarque** : chaque nouvel article reçoit un `id` unique (`articles.length + 1`). Si tous les nouveaux articles avaient le même `id`, le `track article.id` du `@for` afficherait un avertissement « duplicated keys » dans la console.

### Séance 3 : services et architecture (panier)

- **Service `PanierService`** (`services/panier.ts`), créé avec `ng g s services/panier` :
  - `@Injectable({ providedIn: 'root' })` : une seule instance partagée par toute l'application. C'est pour ça que le header, l'aside et les produits affichent toujours les mêmes chiffres.
  - `produits` : signal contenant la liste des produits du panier.
  - `ajouter(produit)` : ajoute un produit au panier.
  - `vider()` : vide le panier.
  - **`calculerTotal()`** : somme des prix des produits (`reduce`).
  - **`compterProduits()`** : nombre de chaque produit dans le panier, par exemple `{ omo: 2, tomo: 1 }`.
  - `total` et `nombreArticles` : `computed` utilisés pour l'affichage.
- **Injection du service** dans un composant :
  ```ts
  panierService = inject(PanierService);
  ```
- **Pipes** :
  - `currency: 'MAD'` affiche le total en dirhams (ex. `MAD557.00`).
  - `keyvalue` permet de parcourir l'objet retourné par `compterProduits()` avec `@for`.
- **Architecture** : la page est découpée en composants (header + panier, aside, catalogue → produits, footer), et les anciens TPs sont déplacés sur une route séparée.

---

## Remarques techniques

- **Angular 20+** : `ng g c aside` crée `aside.ts` avec une classe `Aside`. Les anciennes versions créaient `aside.component.ts` avec `AsideComponent`. Le fichier `home/home.component.ts` utilise l'ancien style et n'est pas utilisé.
- Le service s'appelle `PanierService` (et non `Panier`) pour ne pas entrer en conflit avec un composant du même nom.
- `$any($event.target).value` est utilisé dans les templates parce que la vérification stricte des types (`strictTemplates`) refuse `$event.target.value`.
