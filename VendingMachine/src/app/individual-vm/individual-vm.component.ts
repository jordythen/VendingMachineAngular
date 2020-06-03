import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { VendingMachine } from '../classes/vendingmachine';
import { ActivatedRoute } from '@angular/router';
import { VendingmachineService } from '../vendingmachine.service';
import { HttpEventType } from '@angular/common/http';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Snack } from '../classes/snack';
import { SnackType } from '../classes/snacktype';
import { SnackService } from '../snack.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{snack.snackName}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Types: {{snackTypes}} </p>
      <p>Description: {{snack.description}}</p>
      <p>Quantity: {{snack.numInStock}}</p>
      <p>Cost: \${{snack.cost}}</p>
      <br>
      <p>Total Fat: {{snack.totalFat}}g</p>
      <p>Total Carbohydrates: {{snack.totalCarbs}}g</p>
      <p>Sodium: {{snack.sodium}}g</p>
      <p>Cholesterol: {{snack.cholesterol}}g</p>


    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="purchase(snack)">Purchase</button>
      <button type="button" class="btn btn-outline-dark" >Make Offer</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
// tslint:disable-next-line: component-class-suffix
export class NgbdModalContent {
  @Input() snack: Snack;
  @Input() snackTypes: string;

  constructor(public activeModal: NgbActiveModal, private snackService: SnackService) {}

  purchase(snack: Snack){
    alert(snack.id);

    this.snackService.buySnackWithMoney(snack);

  }
}



@Component({
  selector: 'app-individual-vm',
  templateUrl: './individual-vm.component.html',
  styleUrls: ['./individual-vm.component.css']
})
export class IndividualVMComponent implements OnInit {

  constructor(private modalService: NgbModal, private route: ActivatedRoute, private vmService: VendingmachineService) { }

  shoppingCart = faShoppingCart;
  star = faStar;
  vmID: number;
  currVendingMachine: VendingMachine;
  statusCode: number;
  currSnack: Snack;

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
  // tslint:disable-next-line: no-trailing-whitespace
  
  open(snackObj: Snack) {
    let snackTypesString: string;
    snackTypesString = '';
    console.log(snackObj);
    for (let i = 0; i < snackObj.types.length; i++){
      if (i === 0){
        snackTypesString += snackObj.types[i].snacktype;
      }else{
        snackTypesString += ", " + snackObj.types[i].snacktype;
      }
    }
    console.log("CONCAT STRING " + snackTypesString);
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.snack = snackObj;
    modalRef.componentInstance.snackTypes = snackTypesString;

  }

}

// for (const field in snackObj){
//   if (field === 'snackName'){
//     this.currSnack.name = snackObj[field];
//   }else if (field === 'description'){
//     this.currSnack.description = snackObj[field];
//   }else if (field === 'cost'){
//     this.currSnack.cost = snackObj[field];
//   }else if (field === 'isHidden'){
//     this.currSnack.isHidden = snackObj[field];
//   }else if (field === 'numInStock'){
//     this.currSnack.quantity = snackObj[field];
//   }else if (field === 'id'){
//     this.currSnack.id = snackObj[field];
//   }else if (field === 'sodium'){
//     this.currSnack.sodium = snackObj[field];
//   }else if (field === 'totalCarbs'){
//     this.currSnack.totalCarbs = snackObj[field];
//   }else if (field === 'totalFat'){
//     this.currSnack.totalFat = snackObj[field];
//   }else if (field === 'cholesterol'){
//     this.currSnack.cholesterol = snackObj[field];
//   }else if (field === 'types'){
//     for (const type of snackObj[field]){
//       this.currSnack.types.push(type);
//     }

//   }
// }
