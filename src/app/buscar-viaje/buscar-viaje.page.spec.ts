import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarViajePage } from './buscar-viaje.page';

describe('BuscarViajePage', () => {
  let component: BuscarViajePage;
  let fixture: ComponentFixture<BuscarViajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BuscarViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
