import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCarritoComponent } from './detallecarrito.component';

describe('DetalleCarritoComponent', () => {
  let component: DetalleCarritoComponent;
  let fixture: ComponentFixture<DetalleCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
