import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { SlideComponent } from './components/slide/slide.component';
import { SelectHamburguerComponent } from './components/select-hamburguer/select-hamburguer.component';
import { SelectBebidaComponent } from './components/select-bebida/select-bebida.component';
import { AjudaComponent } from './components/ajuda/ajuda.component';
import { HamburguerComponent } from './components/hamburguer/hamburguer.component';
import { BatataComponent } from './components/batata/batata.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'contact', component: ContactComponent},
  {path:'login', component: LoginComponent},
  {path:'cadastroCliente', component: CadastroComponent},
  {path:'sobreNos', component: SobreNosComponent},
  {path:'slide', component: SlideComponent},
  {path:'selectBurg',component: SelectHamburguerComponent},
  {path:'selectBebida',component: SelectBebidaComponent},
  {path:'ajuda',component: AjudaComponent},
  {path:'nos',component: SobreNosComponent},
  {path:'hamburguer',component: HamburguerComponent},
  {path:'batata',component: BatataComponent},
  {path:'bebidas',component: BebidasComponent},
  {path:'cardapio',component: CardapioComponent},
  {path:'',redirectTo: 'home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
