import { Injectable } from "@angular/core";


@Injectable()
export class FruitService{
    fruitList = [
        {name: 'Mango'},
        {name: 'Mango'},
        {name: 'Mango'},
        {name: 'Apple'},
        {name: 'Graps'},
        {name: 'BlackBerry'},
        {name: 'Orange'}
    ];
    constructor(){}
    getFruitList(){
        return this.fruitList;
    }
}