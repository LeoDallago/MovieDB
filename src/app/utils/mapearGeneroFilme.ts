import { GeneroFilme } from "../models/genero-filme";

export function mepearGeneroFilme(obj: any): GeneroFilme {
    return {
        nome: obj.genres.name
    }
}

