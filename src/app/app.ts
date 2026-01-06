import { Component, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSidenav } from '@angular/material/sidenav';
import { About } from "./about/about";
import { Contacts } from "./contacts/contacts";
import { Projects } from "./projects/projects";
import { Home } from "./home/home";
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    About,
    Contacts,
    Projects,
    Home,
    Navbar,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    Footer
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-portfolio');
  
  @ViewChild('drawer') drawer!: MatSidenav;
}
