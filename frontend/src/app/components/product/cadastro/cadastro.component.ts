import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  product: Product = {
    name: '',
    price: null,
    estado: ''
  }

  constructor(private service: ServicesService, private route: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.service.create(this.product).subscribe(() => {
      this.service.showMenssage('Produto Cadastrado')
      this.route.navigate(['read'])
    })
  }

}
