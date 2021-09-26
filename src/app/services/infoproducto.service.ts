import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { InfoProducto } from '../interfaces/info-productos.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoproductoService {
  prod : InfoProducto = {};
  cargada = false;
  constructor(private http: HttpClient) { 
    console.log("servicio inicializado");
    this.http.get('assets/data/data-producto.json')
    .subscribe( (resp: InfoProducto) => {
      console.log(resp);
      this.cargada = true;
      this.prod = resp;
      console.log(  );
    })

  }
}
