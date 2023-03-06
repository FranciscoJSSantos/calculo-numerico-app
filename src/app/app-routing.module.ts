import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../app/components/home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: 'newton',
    loadChildren: () =>
      import('../app/components/newton/newton.module').then(
        (m) => m.NewtonModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'secante',
    loadChildren: () =>
      import('../app/components/secante/secante.module').then(
        (m) => m.SecanteModule
      ),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
