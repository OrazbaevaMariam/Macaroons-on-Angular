import { Component } from '@angular/core';
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
   showPresent = false;
   instagram = 'https://www.instagram.com/'
   number = ' +375 (29) 368-98-68'

  public advantages = [
    {
      number: '1',
      name: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты ароматизаторы и красители.'
    },
    {
      number: '2',
      name: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок'
    },
    {
      number: '3',
      name: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      number: '4',
      name: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },

  ];
 public products: ProductType[] = [
    {
      image: 'pink.png',
      name: 'Макарун с малиной',
      number: '1 шт.',
      price: '1,70 руб.'
    },
    {
      image: 'yellow.png',
      name: 'Макарун с манго',
      number: '1 шт.',
      price: '1,70 руб.'
    },
    {
      image: 'white.png',
      name: 'Пирог с ванилью',
      number: '1 шт.',
      price: '1,70 руб.'
    },
    {
      image: 'green.png',
      name: 'Пирог с фисташками',
      number: '1 шт.',
      price: '1,70 руб.'
    },
  ];

 public formValues = {
   productTitle: '',
   productName: '',
   productPhone: '',
 }

 public scrollTo(target: HTMLElement): void {
   target.scrollIntoView({behavior: 'smooth'});
 }

 public addToCart(product: ProductType, target: HTMLElement): void {
this.scrollTo(target)
   throw this.formValues.productTitle = product.name.toUpperCase();
 }
}
