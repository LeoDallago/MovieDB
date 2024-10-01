import { Component, OnInit } from '@angular/core';
import { Filme } from '../../models/filme';
import { FilmeService } from '../../service/filme.service';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { not } from 'rxjs/internal/util/not';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [NgForOf, NgIf, NgClass, RouterLink],
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
      console.log(res.results)
      console.log(this.filmes)

    });
  }

  private mapearFilmes(obj: any): Filme {
    return {
      id: obj.id,
      titulo: obj.title,
      urlPoster: 'https://image.tmdb.org/t/p/w400/' + obj.poster_path,
      nota: Math.floor(obj.vote_average * 10),
      dataLancamento: obj.release_date
    }
  }

  public corNota(nota: number) {
    if (nota < 50) {
      return 'text-bg-danger'
    } else if (nota > 51 && nota < 75) {
      return 'text-bg-warning'
    } else {
      return 'text-bg-success'
    }
  }
}
