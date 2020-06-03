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
  optionValue = 'vmAll';
  matchFound = true;

  constructor(private router: Router,
              private vendService: VendingmachineService) { }

  ngOnInit(): void {
    this.vendService.getAll().subscribe(
      resp => {
        console.log(resp);
        if (resp.length < 1) {
          this.matchFound = false;
          this.allVendingMachine = null;
        } else {
          this.matchFound = true;
          this.allVendingMachine = resp;
        }
      }
    );
  }

  doSearch(){
    const searchType = document.getElementById('sType') as HTMLSelectElement;
    const searchTypeVal = searchType.options[searchType.selectedIndex].value;

    if (searchTypeVal === 'vmAll') {
      this.vendService.getAll().subscribe(
        resp => {
          console.log(resp);
          if (resp.length < 1) {
            this.matchFound = false;
            this.allVendingMachine = null;
          } else {
            this.matchFound = true;
            this.allVendingMachine = resp;
          }
        }
      );

    } else if (searchTypeVal === 'vmName') {
      const tbox = document.getElementById('sText') as HTMLInputElement;
      const searchStr = tbox.value;
      this.vendService.getByName(searchStr).subscribe(
        resp => {
          console.log(resp);
          if (resp.length < 1) {
            this.matchFound = false;
            this.allVendingMachine = null;
          } else {
            this.matchFound = true;
            this.allVendingMachine = resp;
          }
        }
      );

    } else if (searchTypeVal === 'vmId') {
      const tbox = document.getElementById('sText') as HTMLInputElement;
      const searchStr = tbox.value as unknown as number;
      this.vendService.getById(searchStr).subscribe(
        resp => {
          console.log(resp);
          if (!resp.body) { // TODO... this is not catching error status!
            this.matchFound = false;
            this.allVendingMachine = null;
          } else {
            this.matchFound = true;
            let vm = resp.body as VendingMachine;
            this.allVendingMachine = [vm];
          }
        }
      );

    } else if (searchTypeVal === 'snackType') {
      const snackType = document.getElementById('snkType') as HTMLSelectElement;
      const snackTypeVal = snackType.options[snackType.selectedIndex].value;
      this.vendService.getByType(snackTypeVal).subscribe(
        resp => {
          console.log(resp);
          if (resp.length < 1) {
            this.matchFound = false;
            this.allVendingMachine = null;
          } else {
            this.matchFound = true;
            this.allVendingMachine = resp;
          }
        }
      );

    } else if (searchTypeVal === 'popHigh') {
      this.vendService.getByPopularityHighest().subscribe(
        resp => {
          console.log(resp);
          if (resp.length < 1) {
            this.matchFound = false;
            this.allVendingMachine = null;
          } else {
            this.matchFound = true;
            this.allVendingMachine = resp;
          }
        }
      );

    } else if (searchTypeVal === 'popLow') {
      this.vendService.getByPopularityLowest().subscribe(
        resp => {
          console.log(resp);
          if (resp.length < 1) {
            this.matchFound = false;
            this.allVendingMachine = null;
          } else {
            this.matchFound = true;
            this.allVendingMachine = resp;
          }
        }
      );
    }
  }

}
