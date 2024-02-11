import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesVentasComponent } from './reportesventas.component';

describe('ReportesVentasComponent', () => {
  let component: ReportesVentasComponent;
  let fixture: ComponentFixture<ReportesVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesVentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});