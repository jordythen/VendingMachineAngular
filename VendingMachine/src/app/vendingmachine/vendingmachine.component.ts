import { Component, OnInit } from '@angular/core';
import { splitTypescriptSuffix } from '@angular/compiler/src/aot/util';
import { VendingmachineService } from '../vendingmachine.service';
import { Router } from '@angular/router';
import { VendingMachine } from '../classes/vendingmachine';

@Component({
  selector: 'app-vendingmachine',
  templateUrl: './vendingmachine.component.html',
  styleUrls: ['./vendingmachine.component.css']
})
export class VendingmachineComponent implements OnInit {
  allVendingMachine: VendingMachine[];
  optionValue = 'vmName';

  constructor(private router: Router,
              private vendService: VendingmachineService) { }

  ngOnInit(): void {
    this.vendService.getAll().subscribe(
      resp => {
        console.log(resp);
        for (let vm of resp){
          document.getElementById('displayVMSection').innerHTML += `<div class="vm-cell">
                <a href='individualVM'>
                    <figure class="caption">
                        <img class="img-rounded" src="https://imgur.com/DTcVDP7.png" />
                        <figcaption class="caption-text img-rounded">
                            <div>
                                <div>${vm.name}</div>
                                <div>Theme: ${vm.theme}</div>
                            </div>
                        </figcaption>
                    </figure>
                </a>
            </div>`;
        }
      }
    );
  }

  doSearch(){
    const searchType = document.getElementById('sType') as HTMLSelectElement;
    const searchTypeVal = searchType.options[searchType.selectedIndex].value;

    if (searchTypeVal === 'vmName') {
      //alert('getByName ' + searchStr);
      const tbox = document.getElementById('sText') as HTMLInputElement;
      const searchStr = tbox.value;

      this.vendService.getByName(searchStr);
      
    } else if (searchTypeVal === 'vmId') {
      //alert('getById ' + searchStr);
      const tbox = document.getElementById('sText') as HTMLInputElement;
      const searchStr = tbox.value;
      this.vendService.getById(searchStr);
    } else if (searchTypeVal === 'snackType') {
      //alert('getByType ' + snackType);
      const snackType = document.getElementById('snkType') as HTMLSelectElement;
      const snackTypeVal = snackType.options[snackType.selectedIndex].value;
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
