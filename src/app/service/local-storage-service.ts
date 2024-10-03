import { Injectable } from '@angular/core';
import { FilmeFavorito } from '../models/filme-favorito';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly chave = 'moviedb';

  private favoritos: FilmeFavorito[];

  constructor() {
    this.favoritos = this.obterFavoritos();
  }

  public salvarFavorito(filme: FilmeFavorito): boolean {
    if (this.favoritoJaExiste(filme.id)) return false;

    this.favoritos.push(filme);

    this.salvarFavoritos();

    return true;
  }

  public removerFavorito(id: number): boolean {
    if (!this.favoritoJaExiste(id)) return false;

    this.favoritos = this.favoritos.filter((f) => f.id != id);

    this.salvarFavoritos();

    return true;
  }

  public favoritoJaExiste(id: number) {
    return this.favoritos.some((f) => f.id == id);
  }

  private salvarFavoritos() {
    const jsonString = JSON.stringify(this.favoritos);

    localStorage.setItem(this.chave, jsonString);
  }

  public obterFavoritos(): FilmeFavorito[] {
    if (this.favoritos) return this.favoritos;

    const jsonString = localStorage.getItem(this.chave);

    if (!jsonString) return [];

    const favoritos = JSON.parse(jsonString) as FilmeFavorito[];

    return favoritos;
  }
}
