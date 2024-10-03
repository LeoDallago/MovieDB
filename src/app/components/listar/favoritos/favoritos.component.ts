import { Component, Input } from '@angular/core';
import { Filme } from "../../../models/filme";
import { NgForOf, NgIf } from "@angular/common";
import { RouterLink } from "@angular/router";
import { FilmeFavorito } from "../../../models/filme-favorito";

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [NgIf,NgForOf,RouterLink],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.scss'
})
export class FavoritosComponent {
  @Input({required: true}) filmesFavoritos!: FilmeFavorito[];
}
