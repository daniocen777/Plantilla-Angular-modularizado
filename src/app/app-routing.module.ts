import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

/* ./usuario/usuario.module#UsuarioModule */
const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'user',
    loadChildren: './usuario/usuario.module#UsuarioModule' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
