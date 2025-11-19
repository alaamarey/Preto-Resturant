import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FloatLabel } from 'primeng/floatlabel';
import { TreeSelect } from 'primeng/treeselect';
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { CategroyData, Daum } from '../../../ourfood/components/foodcategroy/models/foodcategroy.interface';
import { CategroyService } from '../../../ourfood/components/foodcategroy/service/categroy.service';
import { TreeNode } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../../../shared/pipe/search-pipe';
import { MewnuitemdetailsComponent } from "../../../mewnuitemdetails/mewnuitemdetails.component";
import { CardModule } from 'primeng/card';
import { CurrencyPipe } from '@angular/common';
import { TreeNodeSelectEvent } from 'primeng/tree';

@Component({
  selector: 'app-menuitems',
  imports: [ButtonComponent, RouterLink, TreeSelect, FormsModule, SearchPipe,  CardModule, CurrencyPipe],
  templateUrl: './menuitems.component.html',
  styleUrl: './menuitems.component.css',
})
export class MenuitemsComponent implements OnInit {

  private readonly categroyService = inject(CategroyService);
  categroies: WritableSignal<Daum[]> = signal<Daum[]>([])
  nodes: WritableSignal<TreeNode<any>[]> = signal([])
  selectedNode: WritableSignal<TreeNode[]> = signal([]);
  categroyServices: WritableSignal<CategroyData[]> = signal([]);


  ngOnInit(): void {

    console.log( sessionStorage.getItem('selectedNode'));
    
    if(  sessionStorage.getItem('selectedNode')) {
      console.log(this.selectedNode());
       this.selectedNode.update( (data) =>[ ...data ,  JSON.parse(sessionStorage.getItem('selectedNode')!)])
      this.getServiceByCategroyId()
    }


    this.categroyService.getAllFoodCategory().subscribe({
      next: (resposne => {
        console.log(resposne);
        this.categroies.set(resposne.data);
        for (let i = 0; i < resposne.data.length; i++) {
     this.nodes().push({ label: resposne.data[i].categoryName, key: resposne.data[i].categoryId.toString() })



        }
        console.log(this.nodes());
      })
    })
  }

  

  getServiceByCategroyId(): void {
    sessionStorage.setItem('selectedNode', JSON.stringify(this.selectedNode().at(-1)));
    console.log(this.selectedNode());
    if (this.selectedNode()) {
      const categroyId = this.selectedNode().at(-1)?.key!
      this.categroyService.getServiceByCategroyId(categroyId).subscribe({
        next: (resposne => {
          if (resposne.result === true) {
            this.categroyServices.set(resposne.data);
            console.log(resposne);
            console.log(this.categroyServices());
          }
        })
      })
    }
  }
















}
