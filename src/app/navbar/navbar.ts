import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSidenav } from '@angular/material/sidenav';
import { ViewChild } from '@angular/core';
import { BRAND_NAME, NAV_ITEMS, SIDENAV_HEADER, MENU_ICON, CLOSE_ICON } from '../constants/navbar.constants';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  @ViewChild('drawer') drawer!: MatSidenav;

  brandName = BRAND_NAME;
  navItems = NAV_ITEMS;
  sidenavHeader = SIDENAV_HEADER;
  menuIcon = MENU_ICON;
  closeIcon = CLOSE_ICON;

  closeSidenav() {
    if (this.drawer?.opened) {
      this.drawer.close();
    }
  }
}
