import { Pipe, PipeTransform } from '@angular/core';
import {CarNotRent} from "../../common/model/carNotRent";

@Pipe({
  name: 'modelFilter'
})
export class ModelFilterPipe implements PipeTransform {

  transform(values:CarNotRent[],search:string): CarNotRent[] {
    if(search==""){
      return values
    }
    return values.filter(value=>
      value.carResource.model.toLowerCase().includes( search.toLowerCase())
    );

  }

}
