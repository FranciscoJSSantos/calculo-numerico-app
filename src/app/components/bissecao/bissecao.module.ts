import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { BissecaoRoutingModule } from './bissecao-routing.module';
import { BissecaoComponent } from './bissecao.component';

@NgModule({
  declarations: [BissecaoComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [BissecaoComponent, BissecaoRoutingModule],
})
export class BissessaoModule {}
