import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  product: Product

  constructor( private service: ServicesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readById(id).subscribe(product =>{
      this.product = product
    })
  }

  updateProduct(): void{
    this.service.update(this.product).subscribe(() =>{
      this.service.showMenssage('Produto alterado com sucesso!')
      this.router.navigate(['/read'])
    })
  }

  cancelProduct(): void{
    this.router.navigate(['/read'])
  }
}
