import { HomeComponent } from './paginas/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { TabelasComponent } from './paginas/tabelas/tabelas.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'sobre', component:SobreComponent},
  { path: 'tabelas', component:TabelasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
