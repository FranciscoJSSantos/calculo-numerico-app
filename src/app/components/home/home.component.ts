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
    localStorage.removeItem('funcao');
    localStorage.removeItem('derivada');
    localStorage.removeItem('pontoParada');
    localStorage.removeItem('numeroMaxIteracoes');
    this.getlocalStorage();
  }

  reBuildItera() {
    localStorage.removeItem('numeroMaxIteracoes');
    this.getlocalStorage();
  }

  reBuildFuncao() {
    localStorage.removeItem('funcao');
    this.getlocalStorage();
  }

  reBuildDerivada() {
    localStorage.removeItem('derivada');
    this.getlocalStorage();
  }

  reBuildParada() {
    localStorage.removeItem('pontoParada');
    this.getlocalStorage();
  }

  funcao: any;
  derivada: any;
  parada: any;
  itera: any;

  getlocalStorage() {
    this.funcao = localStorage.getItem('funcao');
    this.derivada = localStorage.getItem('derivada');
    this.parada = localStorage.getItem('pontoParada');
    this.itera = localStorage.getItem('numeroMaxIteracoes');
  }

  ngOnInit(): void {
    this.getlocalStorage();
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
    localStorage.setItem('funcao', this.escrevaFuncao?.nativeElement.value);
    this.funcao = localStorage.getItem('funcao');
  }

  addDerivada() {
    localStorage.setItem('derivada', this.escrevaDerivada?.nativeElement.value);
    this.derivada = localStorage.getItem('derivada');
  }

  addPontoParada() {
    localStorage.setItem('pontoParada', this.pontoParada?.nativeElement.value);
    this.parada = localStorage.getItem('pontoParada');
  }

  addNumeroMaxDeIteracoes() {
    localStorage.setItem(
      'numeroMaxIteracoes',
      this.numeroMaxIteracoes?.nativeElement.value
    );
    this.itera = localStorage.getItem('numeroMaxIteracoes');
  }
}
