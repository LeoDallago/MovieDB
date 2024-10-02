import { ElencoFilme } from "../models/elenco-filme";

export function mapearElencoFilme(obj: any): ElencoFilme {
    return {
        nome: obj.credits.cast
    };
}
