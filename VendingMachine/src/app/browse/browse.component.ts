import { Component, OnInit } from '@angular/core';
import { splitTypescriptSuffix } from '@angular/compiler/src/aot/util';
import { VendingmachineService } from '../vendingmachine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private router: Router,
              private vendService: VendingmachineService) { }

  ngOnInit(): void {
  }

  doSearch(){
    const sel = document.getElementById('sType') as HTMLSelectElement;
    const val = sel.options[sel.selectedIndex].value;
    const tbox = document.getElementById('sText') as HTMLInputElement;
    const searchStr = tbox.value;
    if (val === 'vmName') {
      this.vendService.getByName(searchStr);
    } else if (val === 'vmId') {
      this.vendService.getById(searchStr);
    } else if (val === 'snackType') {
      this.vendService.getByType(searchStr);
    } else if (val === 'popHigh') {
      this.vendService.getByPopularityHighest();
    } else if (val === 'popLow') {
      this.vendService.getByPopularityLowest();
    }
  }

}
