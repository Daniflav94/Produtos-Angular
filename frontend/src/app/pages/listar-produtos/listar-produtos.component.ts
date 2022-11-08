import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/Produto';
import { ProdutosApiService } from 'src/app/services/produtos-api.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  constructor(
    private produtosService: ProdutosApiService
  ) { }

  listaProdutos!: Produto[]
  imagemPadrao: string = 'https://igp.rs.gov.br/themes/modelo-noticias/images/outros/GD_imgSemImagem.png'

  ngOnInit(): void {  //é chamado quanod o componente for renderizado na tela
    this.produtosService.listarProdutos().subscribe(
      (prods) => {
        this.listaProdutos = prods;
        prods.forEach((produto) => {
          if(produto.foto == ''){
            produto.foto = this.imagemPadrao
          }
        })
        
      }
    )
  }

}
