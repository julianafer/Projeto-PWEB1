import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDiariaComponent } from './cadastro-diaria.component';

describe('CadastroDiariaComponent', () => {
  let component: CadastroDiariaComponent;
  let fixture: ComponentFixture<CadastroDiariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroDiariaComponent]
    });
    fixture = TestBed.createComponent(CadastroDiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
