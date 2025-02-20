import {Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'my-app';
  showPresent = true;
  instagram = 'https://www.instagram.com/'
  number = '375293689868'

  public advantages = [
    {
      i: 0,
      name: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты ароматизаторы и красители.'
    },
    {
      i: 1,
      name: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок'
    },
    {
      i: 2,
      name: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      i: 3,
      name: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },

  ];
  public products: ProductType[] = []

  public formValues = {
    productTitle: '',
    productName: '',
    productPhone: '',
  }

  constructor(private productService: ProductService, public cartService: CartService) {
  }


  ngOnInit() {
    this.products = this.productService.getProducts();

  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target)
    this.formValues.productTitle = product.name.toUpperCase();
    this.cartService.count++;
    this.cartService.addToCart(product);
  };
}
