import { Component, OnInit, OnChanges } from '@angular/core';
import { VendingMachine } from '../classes/vendingmachine';
import { ActivatedRoute } from '@angular/router';
import { VendingmachineService } from '../vendingmachine.service';
import { HttpEventType } from '@angular/common/http';
import { faShoppingCart, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-individual-vm',
  templateUrl: './individual-vm.component.html',
  styleUrls: ['./individual-vm.component.css']
})
export class IndividualVMComponent implements OnInit, OnChanges {

  shoppingCart = faShoppingCart;
  shoppingBasket = faShoppingBasket;
  vmID: number;
  currVendingMachine: VendingMachine;
  statusCode: number;

  constructor(private route: ActivatedRoute, private vmService: VendingmachineService) { }
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.vmService.getById(this.vmID).subscribe(
      resp => {
        this.statusCode = resp.status;

        if (resp.type === HttpEventType.Response && this.statusCode === 200){
          // It's good to go!
          this.currVendingMachine = resp.body;
          console.log(this.currVendingMachine);
        }else if (resp.type === HttpEventType.Response && this.statusCode === 404){
          // No content received
          alert('Error occured while retrieving vending machine');
        }else{
          // Show loading
          console.log('loading... from onchanges');
        }
      }
    );
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.vmID = +params.get('vmID');
      this.vmService.getById(this.vmID).subscribe(
        resp => {
          this.statusCode = resp.status;

          if (resp.type === HttpEventType.Response && this.statusCode === 200){
            // It's good to go!
            this.currVendingMachine = resp.body;
            console.log(this.currVendingMachine);
          }else if (resp.type === HttpEventType.Response && this.statusCode === 404){
            // No content received
            alert('Error occured while retrieving vending machine');
            window.location.href = 'home';
          }
        }
      );
    });
  }



}
