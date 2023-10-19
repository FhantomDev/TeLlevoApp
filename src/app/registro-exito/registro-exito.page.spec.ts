import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroExitoPage } from './registro-exito.page';

describe('RegistroExitoPage', () => {
  let component: RegistroExitoPage;
  let fixture: ComponentFixture<RegistroExitoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroExitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
