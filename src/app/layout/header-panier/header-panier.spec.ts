import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPanier } from './header-panier';

describe('HeaderPanier', () => {
  let component: HeaderPanier;
  let fixture: ComponentFixture<HeaderPanier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderPanier],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderPanier);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
