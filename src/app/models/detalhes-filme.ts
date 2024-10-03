export interface DetalhesFilme {
    id: number,
    titulo: string,
    descricao: string,
    generos: any[],
    elenco: any[],
    nota: number,
    duracao: string,
    dataLancamento: string,
    urlPoster: string,
    urlBanner: string,
    favorito: boolean
}
