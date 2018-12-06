import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';

import { DocumentoComponent } from '../../sidebar-itens/documento/documento.component';
import { PesquisaComponent } from '../../sidebar-itens/pesquisa-set/pesquisa.component'
import { DashboardComponent } from '../../sidebar-itens/dashboard/dashboard.component';
import { UserProfileComponent } from '../../sidebar-itens/user-profile/user-profile.component';
import { TableListComponent } from '../../sidebar-itens/table-list/table-list.component';
import { SetProfileComponent } from 'app/sidebar-itens/Set-profile/set-profile.component';
import { DesejoListComponent } from 'app/sidebar-itens/desejo-list/desejo-list.component';
import { ModeloProfileComponent } from 'app/sidebar-itens/modelo-profile/modelo-profile.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { PecaProfileComponent } from 'app/sidebar-itens/peca-profile/peca-profile.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    DocumentoComponent,
    PesquisaComponent,
    SetProfileComponent,
    PecaProfileComponent,
    DesejoListComponent,
    ModeloProfileComponent
  ]
})

export class AdminLayoutModule {}
