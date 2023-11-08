import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaDiariaComponent } from './tabela-diaria.component';

describe('TabelaDiariaComponent', () => {
  let component: TabelaDiariaComponent;
  let fixture: ComponentFixture<TabelaDiariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaDiariaComponent]
    });
    fixture = TestBed.createComponent(TabelaDiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
