import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListarProdutosComponent } from "./pages/listar-produtos/listar-produtos.component";

const rotas: Routes = [
    {
        path: '',
        redirectTo: 'produtos', //redireciona o usuário para outtra no momento que ele entrar nessa rota
        pathMatch: 'full'
    },
    {
        path:  'produtos',
        component: ListarProdutosComponent
    }

]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(rotas) //módulo que inicia o roteamento
    ],
    providers: [],
    exports: [
        RouterModule
    ]
})


export class AppRoutingModule {}
