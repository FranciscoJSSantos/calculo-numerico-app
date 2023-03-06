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

  @ViewChild('pontoParada') pontoParada?: ElementRef;

  @ViewChild('numeroMaxIteracoes') numeroMaxIteracoes?: ElementRef;

  reBuild() {
    sessionStorage.removeItem('funcao');
    sessionStorage.removeItem('derivada');
    sessionStorage.removeItem('pontoParada');
    sessionStorage.removeItem('numeroMaxIteracoes');
    this.getSessionStorage();
  }

  reBuildItera() {
    sessionStorage.removeItem('numeroMaxIteracoes');
    this.getSessionStorage();
  }

  reBuildFuncao() {
    sessionStorage.removeItem('funcao');
    this.getSessionStorage();
  }

  reBuildDerivada() {
    sessionStorage.removeItem('derivada');
    this.getSessionStorage();
  }

  reBuildParada() {
    sessionStorage.removeItem('pontoParada');
    this.getSessionStorage();
  }

  funcao: any;
  derivada: any;
  parada: any;
  itera: any;

  getSessionStorage() {
    this.funcao = sessionStorage.getItem('funcao');
    this.derivada = sessionStorage.getItem('derivada');
    this.parada = sessionStorage.getItem('pontoParada');
    this.itera = sessionStorage.getItem('numeroMaxIteracoes');
  }

  ngOnInit(): void {
    this.getSessionStorage();
  }

  goNewton() {
    this._router.navigate(['/newton']);
  }

  goSecante() {
    this._router.navigate(['/secante']);
  }

  goBissecao() {
    this._router.navigate(['/bissecao']);
  }

  goFalsaPosicao() {
    this._router.navigate(['/falsa-posicao']);
  }

  addFuncao() {
    sessionStorage.setItem('funcao', this.escrevaFuncao?.nativeElement.value);
    this.funcao = sessionStorage.getItem('funcao');
  }

  addDerivada() {
    sessionStorage.setItem(
      'derivada',
      this.escrevaDerivada?.nativeElement.value
    );
    this.derivada = sessionStorage.getItem('derivada');
  }

  addPontoParada() {
    sessionStorage.setItem(
      'pontoParada',
      this.pontoParada?.nativeElement.value
    );
    this.parada = sessionStorage.getItem('pontoParada');
  }

  addNumeroMaxDeIteracoes() {
    sessionStorage.setItem(
      'numeroMaxIteracoes',
      this.numeroMaxIteracoes?.nativeElement.value
    );
    this.itera = sessionStorage.getItem('numeroMaxIteracoes');
  }
}
