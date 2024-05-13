import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Product {
  id: string;
  title: string;
  price: string;
  images: string[];
}

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [NavbarComponent, HttpClientModule, CommonModule],
  templateUrl: './scroll.component.html',
  styles: `
  .h-custom {
    height: 250px;
    overflow: auto
  }
  `
})
export class ScrollComponent {

  products: Product[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit(){
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.products = data;
    })
  }
}
