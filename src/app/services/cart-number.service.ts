import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartNumberService {
  count: number = 0;
  constructor() { }
}
