import { Pipe, PipeTransform } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Daum } from '../../features/ourfood/components/foodcategroy/models/foodcategroy.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(array : Daum[] , selectedNode : TreeNode []   ): Daum [] {


    const labelName =  selectedNode.at(-1)?.label  ; 
 return  array.filter(    item  =>  item.categoryName === labelName    )

  }

}
