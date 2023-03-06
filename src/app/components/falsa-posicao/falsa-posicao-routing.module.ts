import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FalsaPosicaoComponent } from './falsa-posicao.component';

const routes: Routes = [
  {
    path: '',
    component: FalsaPosicaoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FalsaPosicaoRoutingModule {}
