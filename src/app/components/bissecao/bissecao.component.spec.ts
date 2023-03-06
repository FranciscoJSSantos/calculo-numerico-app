import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BissecaoComponent } from './bissecao.component';

describe('BissecaoComponent', () => {
  let component: BissecaoComponent;
  let fixture: ComponentFixture<BissecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BissecaoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BissecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
