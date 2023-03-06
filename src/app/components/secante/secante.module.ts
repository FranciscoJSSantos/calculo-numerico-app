import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { SecanteRoutingModule } from './secante-routing.module';
import { SecanteComponent } from './secante.component';

@NgModule({
  declarations: [SecanteComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [SecanteComponent, SecanteRoutingModule],
})
export class SecanteModule {}
