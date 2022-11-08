import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosApiService {

  private readonly baseURL: string = 'http://localhost:4000/produtos'

  constructor(
    private http: HttpClient
  ) { }

  listarProdutos() {
    return this.http.get<Produto[]>(this.baseURL)
  }
}
