import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnciensTps } from './anciens-tps';

describe('AnciensTps', () => {
  let component: AnciensTps;
  let fixture: ComponentFixture<AnciensTps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnciensTps],
    }).compileComponents();

    fixture = TestBed.createComponent(AnciensTps);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
