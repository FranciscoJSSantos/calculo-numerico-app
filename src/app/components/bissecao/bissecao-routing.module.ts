import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BissecaoComponent } from './bissecao.component';

const routes: Routes = [
  {
    path: '',
    component: BissecaoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BissecaoRoutingModule {}
