import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewtonComponent } from './newton.component';

export const routes: Routes = [
  {
    path: '',
    component: NewtonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewtonRoutingModule {}
