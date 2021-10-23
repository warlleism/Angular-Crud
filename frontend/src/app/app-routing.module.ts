import { DeleteComponent } from './components/product/delete/delete.component';
import { UpdateComponent } from './components/product/update/update.component';
import { ReadComponent } from './components/product/read/read.component';
import { CardsComponent } from './components/cards/cards.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/product/cadastro/cadastro.component';

const routes: Routes = [{
  path: "",
  component: CardsComponent
},
{
  path: "cadastro",
  component: CadastroComponent
},
{
  path: "read",
  component: ReadComponent
},
{
  path: "products/update/:id",
  component: UpdateComponent
},
{
  path: "products/delete/:id",
  component: DeleteComponent 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
