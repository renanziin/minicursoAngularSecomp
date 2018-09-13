import { Routes, RouterModule } from "@angular/router";

import { GalaxiaComponent } from "./galaxia/galaxia.component";
import { CadastroComponent } from "./cadastro/cadastro.component";


const rotasApp:Routes= [ {path: '', component: GalaxiaComponent},
                         {path: '', component: CadastroComponent},
                         {path: '**', redirectTo: ''}] 



export const ModuloRoteador = RouterModule.forRoot(rotasApp);