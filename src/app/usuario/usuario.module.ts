import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { Routes, RouterModule } from '@angular/router';
// Material
import { MatGridListModule } from '@angular/material/grid-list';
import { PanelIzquiedaComponent } from './panel-izquieda/panel-izquieda.component';
import { PanelDerechaComponent } from './panel-derecha/panel-derecha.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [{ path: '', component: InicioComponent }];

@NgModule({
  declarations: [
    InicioComponent,
    PanelIzquiedaComponent,
    PanelDerechaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DashboardModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
  ],
})
export class UsuarioModule {}
