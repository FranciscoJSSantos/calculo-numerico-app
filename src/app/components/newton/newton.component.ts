import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-newton',
  templateUrl: './newton.component.html',
  styleUrls: ['./newton.component.scss'],
})
export class NewtonComponent implements OnInit {
  @ViewChild('chuteInicial') chuteInicial?: ElementRef;

  constructor() {}

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
    var valor =
      sessionStorage.getItem('derivada') === null
        ? 'x**2'
        : sessionStorage.getItem('derivada');
    var derivada =
      valor?.replaceAll('x', xValue) == null
        ? 'x**2'
        : valor?.replaceAll('x', xValue);

    return eval(derivada);
  }

  x0: any = this.chuteInicial?.nativeElement.value;

  resultadoEncontrado: any = 0.0;

  items: any[] = [];

  newton(f: any, df: any, x0: any, tol = 10 ** -4, max = 100) {
    var x = x0;

    for (var i = 1; i < max; i++) {
      var fx = f(x);

      console.log(`iteracao ${i} | raiz - ${fx} | metodo - ${x}`);
      this.items.push({ iteracao: i, raiz: fx, metodo: x });

      if (Math.abs(fx) < tol) {
        console.log(`encontrada na funcao ${x} ✅`);
        this.resultadoEncontrado = x;
        return x;
      }

      var dfx = df(x);
      if (dfx == 0)
        console.log('Derivada nula. Tentativa de divisão por zero.');
      x = x - fx / dfx;
    }
  }
}
