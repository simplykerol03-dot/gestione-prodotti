import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menu = [
  { label: 'Dashboard', path: '/', icon: 'bi-speedometer2', exact: true },
  { label: 'Prodotti', path: '/products', icon: 'bi-box-seam', exact: false },
];
}