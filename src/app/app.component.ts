import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  selectedNewBusiness: any[] = [
    {id: 1, name: 'A'},
    {id: 2, name: 'B'},
    {id: 3, name: 'C'},
    {id: 4, name: 'D'},
    {id: 5, name: 'E'},
  ];

  selectedNewCountry: any[] = [
    {id: 1, name: 'CA'},
    {id: 2, name: 'CB'},
    {id: 3, name: 'CC'},
    {id: 4, name: 'CD'},
    {id: 5, name: 'CE'},
  ];

  combinedArray: any[] = [];

  grandTotal: number = 0;

  constructor() {

  }

  ngOnInit(){
    this.combinedArray = this.permutation(this.selectedNewBusiness, this.selectedNewCountry);
  }


  calculateTotal(event, item){
    item.total = item.data.map((ist) => parseInt(ist.value)).reduce((acc, curr) => acc+curr, 0);
    this.calculateGrandTotal();
  }

  calculateGrandTotal(){
    this.grandTotal = this.combinedArray.map((ist) => parseInt(ist.total)).reduce((acc, curr) => acc+curr, 0);
  }

  permutation(arr1: any[], arr2: any[]){
    let permutedArray: any[] = [];
    for(let i = 0; i<arr1.length; i++){
      for(let j=0; j<arr2.length; j++){
        permutedArray.push({
          business: arr1[i],
          country: arr2[j],
          data: [
            {value: 0, projectDetailsId: 1},
            {value: 0, projectDetailsId: 2},
            {value: 0, projectDetailsId: 3},
            {value: 0, projectDetailsId: 4},
            {value: 0, projectDetailsId: 5}
          ],
          total: 0
        });
      }
    }
    return permutedArray;
  }


}
