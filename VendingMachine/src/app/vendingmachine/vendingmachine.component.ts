import { Component, OnInit } from '@angular/core';
import { splitTypescriptSuffix } from '@angular/compiler/src/aot/util';
import { VendingmachineService } from '../vendingmachine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendingmachine',
  templateUrl: './vendingmachine.component.html',
  styleUrls: ['./vendingmachine.component.css']
})
export class VendingmachineComponent implements OnInit {

  optionValue = 'vmName';

  constructor(private router: Router,
              private vendService: VendingmachineService) { }

  ngOnInit(): void {
  }

  doSearch(){

    alert('test'); //TEMP

    const searchType = document.getElementById('sType') as HTMLSelectElement;
    const searchTypeVal = searchType.options[searchType.selectedIndex].value;
    const tbox = document.getElementById('sText') as HTMLInputElement;
    const searchStr = tbox.value;
    const snackType = document.getElementById('snkType') as HTMLSelectElement;
    const snackTypeVal = snackType.options[snackType.selectedIndex].value;

    if (searchTypeVal === 'vmName') {
      //alert('getByName ' + searchStr);
      this.vendService.getByName(searchStr);
    } else if (searchTypeVal === 'vmId') {
      //alert('getById ' + searchStr);
      this.vendService.getById(searchStr);
    } else if (searchTypeVal === 'snackType') {
      //alert('getByType ' + snackType);
      this.vendService.getByType(snackTypeVal);
    } else if (searchTypeVal === 'popHigh') {
      //alert('getByPopularityHighest');
      this.vendService.getByPopularityHighest();
    } else if (searchTypeVal === 'popLow') {
      //alert('getByPopularityLowest');
      this.vendService.getByPopularityLowest();
    } else {
      alert('error');
    }
  }

}
