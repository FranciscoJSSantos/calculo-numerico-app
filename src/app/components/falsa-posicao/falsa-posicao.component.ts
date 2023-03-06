import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bissecao',
  templateUrl: './falsa-posicao.component.html',
  styleUrls: ['./falsa-posicao.component.scss'],
})
export class FalsaPosicaoComponent implements OnInit {
  @ViewChild('valorInicial') valorInicial?: ElementRef;
  @ViewChild('valorFinal') valorFinal?: ElementRef;

  constructor(private _router: Router) {}

  goBack() {
    this._router.navigate(['/home']);
  }

  reBuild() {
    this.items = [];
    this.resultadoEncontrado = 0;
    this.iteracaoEncontada = 0;
  }

  ngOnInit(): void {}

  f(xValue: any) {
    var valor =
      sessionStorage.getItem('funcao') === null
        ? 'x**2'
        : sessionStorage.getItem('funcao');
    var funcao =
      valor?.replaceAll('x', xValue) == null
        ? 'x**2'
        : valor?.replaceAll('x', xValue);
    return eval(funcao);
  }
  //x ** 3 - 9 * x + 3
  //3*(x**2) - 9

  df(xValue: any) {
    var valor = sessionStorage.getItem('derivada')!;
    var derivada = valor?.replaceAll('x', xValue)!;

    return eval(derivada);
  }

  x0: any = this.valorInicial?.nativeElement.value;
  x1: any = this.valorFinal?.nativeElement.value;
  pontoParada: any = eval(sessionStorage.getItem('pontoParada')!);
  numeroMaxIteracoes: any = eval(sessionStorage.getItem('numeroMaxIteracoes')!);

  resultadoEncontrado: any = 0.0;
  iteracaoEncontada: any = 0;

  items: any[] = [];

  falsaPosicao(
    f: any,
    a: any,
    b: any,
    tol = this.pontoParada,
    max = this.numeroMaxIteracoes
  ): any {
    let fa = f(a);
    let fb = f(b);

    if (fa * fb > 0) {
      throw new Error('Não há raiz no intervalo especificado.');
    }

    let c = a;
    for (var i = 0; i < max; i++) {
      let fc = f(c);
      let m = (fb - fa) / (b - a);
      let d = fa / m;
      let x = c - d;

      console.log(`iteracao ${0 + 1} | raiz - ${m} | metodo - ${d}`);
      this.items.push({ iteracao: i + 1, raiz: d, metodo: x });

      if (Math.abs(d) < tol) {
        console.log(`encontrada na funcao ${x} ✅`);
        this.resultadoEncontrado = x;
        this.iteracaoEncontada = i + 1;
        return x;
      }

      let fx = f(x);
      if (fa * fx > 0) {
        a = x;
        fa = fx;
      } else {
        b = x;
        fb = fx;
      }
      c = (a * fb - b * fa) / (fb - fa);
    }
  }
}