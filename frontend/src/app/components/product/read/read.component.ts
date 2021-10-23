import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['name','price','estado','id','ações']

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.service.read().subscribe(products =>{
      this.products = products
    })
  }
}
