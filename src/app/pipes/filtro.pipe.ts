import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any {
  //   return null;
  // }

  transform(arreglo: any[], texto: string, columna: string): any[] {

    if  (texto === '') {
      return arreglo;
    }

    texto = texto.toLowerCase();
    return arreglo.filter( item => {
      return item[columna].toLowerCase()
        .includes(texto);
    });
    // console.log(arreglo);
    // return arreglo;
  }

}
