import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FalsaPosicaoComponent } from './falsa-posicao.component';

describe('BissecaoComponent', () => {
  let component: FalsaPosicaoComponent;
  let fixture: ComponentFixture<FalsaPosicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FalsaPosicaoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FalsaPosicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
