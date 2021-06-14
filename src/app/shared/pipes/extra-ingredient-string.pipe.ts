import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extraIngredientString',
})
export class ExtraIngredientStringPipe implements PipeTransform {
  transform(value: any, includePrice: boolean = true): string {
    let str = '';
    if (value && value.ingredient && value.ingredient.length) {
      const includedIngredients = value.ingredient.filter((e) => e.include);
      if (includedIngredients.length) {
        str += 'Extra: ';
        includedIngredients.forEach((e, index) => {
          str += `${e.extraName}`;
          if (includePrice) {
            str += ` @$${e.extraPrice}`;
          }
          str += index + 1 === includedIngredients.length ? '.' : ', ';
        });
      }
    }
    return str;
  }
}
