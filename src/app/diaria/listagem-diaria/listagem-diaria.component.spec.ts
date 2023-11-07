import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemDiariaComponent } from './listagem-diaria.component';

describe('ListagemDiariaComponent', () => {
  let component: ListagemDiariaComponent;
  let fixture: ComponentFixture<ListagemDiariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemDiariaComponent]
    });
    fixture = TestBed.createComponent(ListagemDiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
