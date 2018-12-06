import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';


import { AgmCoreModule } from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './guard/login.guard';
import { SetService } from './services/set.service';
import { PecaService } from './services/peca.service';
import { ListaDesejoService } from './services/listaDesejo.service';
import { HistoricoCompraService } from './services/historicoCompra.service';
import { ModeloService } from './services/modelo.service'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    SetService,
    PecaService,
    ListaDesejoService,
    HistoricoCompraService,
    ModeloService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
