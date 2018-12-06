import { Routes } from '@angular/router';

import { PesquisaComponent } from '../../sidebar-itens/pesquisa-set/pesquisa.component'
import { DocumentoComponent } from '../../sidebar-itens/documento/documento.component';
import { UserProfileComponent } from '../../sidebar-itens/user-profile/user-profile.component';
import { DashboardComponent } from '../../sidebar-itens/dashboard/dashboard.component';
import { TableListComponent } from '../../sidebar-itens/table-list/table-list.component';
import { SetProfileComponent } from 'app/sidebar-itens/Set-profile/set-profile.component';
import { DesejoListComponent } from 'app/sidebar-itens/desejo-list/desejo-list.component';
import { ModeloProfileComponent } from 'app/sidebar-itens/modelo-profile/modelo-profile.component';
import { PecaProfileComponent } from 'app/sidebar-itens/peca-profile/peca-profile.component';


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'documento', component: DocumentoComponent },
    { path: 'pesquisa', component: PesquisaComponent},
    { path: 'set-profile', component: SetProfileComponent},
    { path: 'peca-profile', component: PecaProfileComponent},
    { path: 'modelo-profile', component: ModeloProfileComponent},
    { path: 'desejo-list', component: DesejoListComponent}
];
