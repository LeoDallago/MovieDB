import { Component, OnInit } from '@angular/core';
import { Filme } from '../../models/filme';
import { FilmeService } from '../../service/filme.service';
import { NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [NgForOf, NgIf, RouterLink],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.scss'
})
export class ListarComponent implements OnInit {
  public filmes: Filme[];


  constructor(private filmeApiService: FilmeService) {
    this.filmes = [];
  }


  ngOnInit(): void {
    this.obterFilmes();
  }

  private obterFilmes() {
    this.filmeApiService.selecionarFilmesPopulares().subscribe((res) => {
      const arrayResultados = res.results as any[];

      this.filmes = arrayResultados.map(this.mapearFilmes);
      console.log(this.filmes)
    });
  }

  private mapearFilmes(obj: any): Filme {
    return {
      id: obj.id,
      titulo: obj.title,
      urlPoster: 'https://image.tmdb.org/t/p/w200/' + obj.poster_path
    }
  }
}
