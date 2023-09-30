import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormaPagoPage } from './forma-pago.page';

describe('FormaPagoPage', () => {
  let component: FormaPagoPage;
  let fixture: ComponentFixture<FormaPagoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormaPagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
