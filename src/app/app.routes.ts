import { Routes } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';

export const routes: Routes = [
    { path: "", redirectTo: "listar", pathMatch: "full" },
    { path: "listar", component: ListarComponent },
    { path: "detalhes/:id", component: DetalhesComponent }
];
