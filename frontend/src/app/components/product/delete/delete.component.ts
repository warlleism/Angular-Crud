import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  product: Product

  constructor( private service: ServicesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readById(id).subscribe(product =>{
      this.product = product
    })
  }

  deleteProduct(): void{
    this.service.delete(this.product.id).subscribe(()=>
    this.service.showMenssage('Produto deletado com sucesso!')
    ) 
    this.router.navigate(['/read'])
  }

}
