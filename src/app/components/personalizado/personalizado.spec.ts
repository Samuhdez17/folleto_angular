import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Personalizado } from './personalizado';

describe('Personalizado', () => {
  let component: Personalizado;
  let fixture: ComponentFixture<Personalizado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Personalizado],
    }).compileComponents();

    fixture = TestBed.createComponent(Personalizado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
