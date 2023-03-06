import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FalsaPosicaoRoutingModule } from './falsa-posicao-routing.module';
import { FalsaPosicaoComponent } from './falsa-posicao.component';

@NgModule({
  declarations: [FalsaPosicaoComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [FalsaPosicaoComponent, FalsaPosicaoRoutingModule],
})
export class FalsaPosicaoModule {}
