import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secante',
  templateUrl: './secante.component.html',
  styleUrls: ['./secante.component.scss'],
})
export class SecanteComponent implements OnInit {
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
      localStorage.getItem('funcao') === null
        ? 'x**2'
        : localStorage.getItem('funcao');
    var funcao =
      valor?.replaceAll('x', xValue) == null
        ? 'x**2'
        : valor?.replaceAll('x', xValue);
    return eval(funcao);
  }
  //x ** 3 - 9 * x + 3
  //3*(x**2) - 9

  df(xValue: any) {
    var valor = localStorage.getItem('derivada')!;
    var derivada = valor?.replaceAll('x', xValue)!;

    return eval(derivada);
  }

  x0: any = this.valorInicial?.nativeElement.value;
  x1: any = this.valorFinal?.nativeElement.value;
  pontoParada: any = eval(localStorage.getItem('pontoParada')!);
  numeroMaxIteracoes: any = eval(localStorage.getItem('numeroMaxIteracoes')!);

  resultadoEncontrado: any = 0.0;
  iteracaoEncontada: any = 0;

  items: any[] = [];

  secante(
    f: any,
    x0: any,
    x1: any,
    tol = this.pontoParada,
    max = this.numeroMaxIteracoes
  ) {
    let fx0 = f(x0);
    let fx1 = f(x1);
    let x = x1;

    for (var i = 0; i < max; i++) {
      let dfx = (fx1 - fx0) / (x1 - x0);
      x = x1 - fx1 / dfx;

      console.log(`iteracao ${0 + 1} | raiz - ${fx1} | metodo - ${x}`);
      this.items.push({ iteracao: i + 1, raiz: fx1, metodo: x });

      if (Math.abs(x - x1) < tol) {
        console.log(`encontrada na funcao ${x} ✅`);
        this.resultadoEncontrado = x;
        this.iteracaoEncontada = i + 1;
        return x;
      }

      x0 = x1;
      fx0 = fx1;
      x1 = x;
      fx1 = f(x1);
    }
  }
}
