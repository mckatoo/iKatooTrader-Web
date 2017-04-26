import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


import { NavbarComponent } from './includes/navbar/navbar.component';
import { SearchComponent } from './includes/search/search.component';
import { SidebarComponent } from './includes/sidebar/sidebar.component';

import { ClientesModule } from './clientes/clientes.module';
import { PoloniexComponent } from './clientes/poloniex/poloniex.component';
import { PoloniexService } from './clientes/poloniex/poloniex.service';
import { HttpUtilService } from './clientes/http-util.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    SidebarComponent,
    PoloniexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpUtilService,PoloniexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
