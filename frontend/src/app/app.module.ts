import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { NaveComponent } from './components/template/nave/nave.component';
import { FooterComponent } from './components/template/footer/footer.component';

import { MatToolbarModule} from '@angular/material/toolbar'
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { CardsComponent } from './components/cards/cards.component';
import { CadastroComponent } from './components/product/cadastro/cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ReadComponent } from './components/product/read/read.component';
import { ForDirective } from './directives/for.directive'

import { LOCALE_ID } from '@angular/core';
import localept from '@angular/common/locales/pt'
import { registerLocaleData} from '@angular/common';
import { UpdateComponent } from './components/product/update/update.component';
import { DeleteComponent } from './components/product/delete/delete.component';

registerLocaleData(localept);



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NaveComponent,
    FooterComponent,
    CardsComponent,
    CadastroComponent,
    ReadComponent,
    ForDirective,
    UpdateComponent,
    DeleteComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,//para usar esse
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,//com esse 
    MatSortModule,
    MatPaginatorModule,
    MatTableModule


  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
