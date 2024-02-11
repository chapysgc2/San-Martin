import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoporteClienteComponent } from './soportecliente.component';

describe('SoporteClienteComponent', () => {
  let component: SoporteClienteComponent;
  let fixture: ComponentFixture<SoporteClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoporteClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoporteClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
