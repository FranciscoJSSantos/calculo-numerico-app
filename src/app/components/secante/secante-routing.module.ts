import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecanteComponent } from './secante.component';

const routes: Routes = [
  {
    path: '',
    component: SecanteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecanteRoutingModule {}
