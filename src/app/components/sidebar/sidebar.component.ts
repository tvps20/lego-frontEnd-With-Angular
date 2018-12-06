import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Perfil',  icon:'person', class: '' },
    { path: '/table-list', title: 'Listagens',  icon:'content_paste', class: '' },
    { path: '/desejo-list', title: 'Lista de Desejo',  icon:'favorite', class: '' },
    { path: '/set-profile', title: 'Set',  icon:'filter_none', class: '' },
    { path: '/peca-profile', title: 'Peca',  icon:'crop_din', class: '' },
    { path: '/modelo-profile', title: 'Modelo',  icon:'done', class: '' },
    { path: '/documento', title: 'Gerar Documento',  icon:'library_books', class: '' },
    { path: '/pesquisa', title: 'Pesquisar Set',  icon:'search', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
