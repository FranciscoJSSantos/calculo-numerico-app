import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newton',
  templateUrl: './newton.component.html',
  styleUrls: ['./newton.component.scss'],
})
export class NewtonComponent implements OnInit {
  @ViewChild('chuteInicial') chuteInicial?: ElementRef;

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

  x0: any = this.chuteInicial?.nativeElement.value;
  pontoParada: any = eval(sessionStorage.getItem('pontoParada')!);
  numeroMaxIteracoes: any = eval(sessionStorage.getItem('numeroMaxIteracoes')!);

  resultadoEncontrado: any = 0.0;
  iteracaoEncontada: any = 0;

  items: any[] = [];

  newton(
    f: any,
    df: any,
    x0: any,
    tol = this.pontoParada,
    max = this.numeroMaxIteracoes
  ) {
    var x = x0;

    for (var i = 0; i < max; i++) {
      var fx = f(x);

      console.log(`iteracao ${0 + 1} | raiz - ${fx} | metodo - ${x}`);
      this.items.push({ iteracao: i + 1, raiz: fx, metodo: x });

      if (Math.abs(fx) < tol) {
        console.log(`encontrada na funcao ${x} ✅`);
        this.resultadoEncontrado = x;
        this.iteracaoEncontada = i + 1;
        return x;
      }

      var dfx = df(x);
      if (dfx == 0)
        console.log('Derivada nula. Tentativa de divisão por zero.');
      x = x - fx / dfx;
    }
  }
}
