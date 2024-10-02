import { Component, OnInit } from '@angular/core';
import { DetalhesFilme } from '../../models/detalhes-filme';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from '../../service/filme.service';
import { NgClass, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [NgClass, NgIf, NgForOf],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.scss'
})
export class DetalhesComponent implements OnInit {
  id?: number;
  detalhesFilme?: DetalhesFilme;

  constructor(
    private route: ActivatedRoute,
    private filmeApiService: FilmeService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (!this.id) {
      return;
    }

    this.filmeApiService.pegarDetalhesDoFilme(this.id).subscribe((res) => {
      this.detalhesFilme = this.mapearDetalhesFilme(res);
      console.log(this.detalhesFilme)
      console.log(res)
    })
  }

  private mapearDetalhesFilme(obj: any): DetalhesFilme {
    return {
      id: obj.id,
      titulo: obj.title,
      descricao: obj.overview,
      generos: obj.genres,
      elenco: obj.credits.cast.slice(0, 10),
      nota: Math.floor(obj.vote_average * 10),
      duracao: obj.runtime,
      dataLancamento: obj.release_date,
      urlPoster: 'https://image.tmdb.org/t/p/original/' + obj.poster_path,
      urlBanner: 'https://image.tmdb.org/t/p/original/' + obj.backdrop_path,
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

