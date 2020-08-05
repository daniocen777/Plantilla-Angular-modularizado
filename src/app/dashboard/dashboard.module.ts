import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

// Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './home/home.component';
import { UsuarioModule } from '../usuario/usuario.module';

/* const routes: Routes = [{ path: '', component: HomeComponent }]; */

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    /* RouterModule.forChild(routes), */
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [HomeComponent],
})
export class DashboardModule {}
