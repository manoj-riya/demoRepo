import { FruitService } from './fruit.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector:'fuiltList',
    templateUrl: './fruit.component.html',
    styleUrls: ['./fruit.component.css']
})

export class FruitComponent implements OnInit{
    constructor( private fruitList: FruitService){}    
    title ="Welcome Fruits page";
    list = [];

    showList(){
        this.list = this.fruitList.getFruitList();
        
        var mangodata = this.list.filter(function(item){
            return item.name == 'Mango'; 
        })

        var mangodata2 = this.list.filter(item => item.name == 'Mango')

        console.log(mangodata2);
    }

    ngOnInit(){
        this.showList();
    }
}