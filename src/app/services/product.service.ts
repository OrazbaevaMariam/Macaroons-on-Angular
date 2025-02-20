import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): ProductType[] {
    return [
      {
        image: 'pink.png',
        name: 'Макарун с малиной',
        number: '1 шт.',
        price: 1.70
      },
      {
        image: 'yellow.png',
        name: 'Макарун с манго',
        number: '1 шт.',
        price: 1.70
      },
      {
        image: 'white.png',
        name: 'Пирог с ванилью',
        number: '1 шт.',
        price: 1.70
      },
      {
        image: 'green.png',
        name: 'Пирог с фисташками',
        number: '1 шт.',
        price: 1.70
      },
    ];
  }
}
