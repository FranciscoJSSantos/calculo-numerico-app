import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public _router: Router) {}

  @ViewChild('escrevaFuncao') escrevaFuncao?: ElementRef;

  @ViewChild('escrevaDerivada') escrevaDerivada?: ElementRef;

  ngOnInit(): void {}

  goNewton() {
    this._router.navigate(['/newton']);
  }

  goSecante() {
    this._router.navigate(['/secante']);
  }

  addFuncao() {
    sessionStorage.setItem('funcao', this.escrevaFuncao?.nativeElement.value);
  }

  addDerivada() {
    sessionStorage.setItem(
      'derivada',
      this.escrevaDerivada?.nativeElement.value
    );
  }
}
