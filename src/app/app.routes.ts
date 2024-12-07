import { Routes } from '@angular/router';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { GrupoComponent } from './paginas/grupo/grupo.component';
import { EventoComponent } from './paginas/evento/evento.component';

export const routes: Routes = [

   
    {path: "perfil", component: PerfilComponent},
    {path: "grupos", component: GrupoComponent},
    {path: "eventos", component: EventoComponent},
];
