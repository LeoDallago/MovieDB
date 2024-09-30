import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilmeService } from './service/filme.service';
import { concatWith } from 'rxjs';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'Gerenciador De Filmes';
}
