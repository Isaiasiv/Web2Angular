import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { SlideComponent } from './components/slide/slide.component';
import { SelectHamburguerComponent } from './components/select-hamburguer/select-hamburguer.component';
import { SelectBebidaComponent } from './components/select-bebida/select-bebida.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { AjudaComponent } from './components/ajuda/ajuda.component';
import { HamburguerComponent } from './components/hamburguer/hamburguer.component';
import { BatataComponent } from './components/batata/batata.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    CadastroComponent,
    SobreNosComponent,
    SlideComponent,
    SelectHamburguerComponent,
    SelectBebidaComponent,
    CardapioComponent,
    AjudaComponent,
    HamburguerComponent,
    BatataComponent,
    BebidasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
