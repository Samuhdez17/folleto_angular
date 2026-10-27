import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Colaboraciones } from './colaboraciones';

describe('Colaboraciones', () => {
  let component: Colaboraciones;
  let fixture: ComponentFixture<Colaboraciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Colaboraciones],
    }).compileComponents();

    fixture = TestBed.createComponent(Colaboraciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
