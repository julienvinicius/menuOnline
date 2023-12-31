// menu.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  getCategorias() {
    return [
      {
        id: 1,
        nome: 'Entradas',
        itens: [
          { id: 1, nome: 'Bruschetta', descricao: 'Tomate, manjericão, azeite', preco: 10.99, imagem: 'assets/brusketas.jpg' },
        ]
      },
      {
        id: 2,
        nome: 'Pratos Principais',
        itens: [
          { id: 2, nome: 'Massa Carbonara', descricao: 'Massa, ovos, bacon', preco: 15.99, imagem: 'assets/brusketas/imagem2.jpg' },
        ]
      },
    ];
  }

  getItem(id: number) {
    return { id: 1, nome: 'Bruschetta', descricao: 'Tomate, manjericão, azeite', preco: 10.99, imagem: 'assets/brusketas.jpg' };
  }
}
