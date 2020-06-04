import { Component, OnInit, DoCheck } from '@angular/core';
import {VendingmachineService} from '../vendingmachine.service';
import { User } from '../classes/user';
import { VendingMachine } from '../classes/vendingmachine';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { faPlus, faMinus  } from '@fortawesome/free-solid-svg-icons';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Snack } from '../classes/snack';
import { SnackType } from '../classes/snacktype';
import { SnackService } from '../snack.service';

@Component({
  selector: 'app-my-vendingmachine',
  templateUrl: './my-vendingmachine.component.html',
  styleUrls: ['./my-vendingmachine.component.css']
})
export class MyVendingmachineComponent implements OnInit, DoCheck {
  plusIcon = faPlus;
  minusIcon = faMinus;
  overlayOn: boolean;
  loggedUser: User;
  userVending: VendingMachine;
  statusCode: number;

  snackToBeAdded: Snack;
  snackName: string;
  snackDesc: string;
  snackCost: number;
  snackFat: number;
  snackCholesterol: number;
  snackCarbs: number;
  snackSodium: number;
  snackType: SnackType;

  // tslint:disable-next-line: max-line-length
  constructor(private snackService: SnackService, private userService: UserService, private vendingService: VendingmachineService, private router: Router) { }
  ngDoCheck(): void {
    if (this.overlayOn === true){
      document.getElementById('bgOverlay').addEventListener('click', () => {
        document.getElementById('addSnackOverlay').style.display = 'none';
        this.snackName = '';
        this.snackDesc = '';
        this.snackCost = 0;
        this.snackFat = 0;
        this.snackCholesterol = 0;
        this.snackCarbs = 0;
        this.snackSodium = 0;
      });
    }
  }


  ngOnInit(): void {
    this.overlayOn = false;
    this.userService.loginUser(null, null).subscribe(
      resp => {
        console.log(resp);
        console.log(resp.body);
        console.log(resp.status);
        this.loggedUser = resp.body;
        console.log(this.loggedUser.vendingMachine);
        this.userVending = this.loggedUser.vendingMachine;
        console.log(this.userVending.description);
      }
    );
  }


  openAddSnack(){
    this.overlayOn = true;
    console.log('opening add snack overlay');
    document.getElementById('addSnackOverlay').style.display = 'grid';
  }

  addSnack(){
    // tslint:disable-next-line: new-parens
    const type = document.getElementById('snkType') as HTMLInputElement;
    console.log(type.value);
    const tempSnackType = new SnackType;
    const snackTypes = [];

    if (type.value === 'DRIED_FRUIT'){
      tempSnackType.id = 1;
    }else if (type.value === 'NUTS'){
      tempSnackType.id = 2;
    }else if (type.value === 'CHIPS'){
      tempSnackType.id = 3;
    }else if (type.value === 'CHOCOLATE'){
      tempSnackType.id = 4;
    }else if (type.value === 'CHEESE'){
      tempSnackType.id = 5;
    }else if (type.value === 'CRACKERS'){
      tempSnackType.id = 6;
    }else if (type.value === 'TRAIL_MIX'){
      tempSnackType.id = 7;
    }else if (type.value === 'YOGURT'){
      tempSnackType.id = 8;
    }else if (type.value === 'JERKY'){
      tempSnackType.id = 9;
    }else if (type.value === 'CANDY'){
      tempSnackType.id = 10;
    }else if (type.value === 'COOKIES'){
      tempSnackType.id = 11;
    }else if (type.value === 'PRETZELS'){
      tempSnackType.id = 12;
    }else if (type.value === 'FRUIT_CANDY'){
      tempSnackType.id = 13;
    }else if (type.value === 'PROTEIN_BAR'){
      tempSnackType.id = 14;
    }else if (type.value === 'CEREAL_BAR'){
      tempSnackType.id = 15;
    }else if (type.value === 'OTHER'){
      tempSnackType.id = 16;
    }

    tempSnackType.snacktype = type.value;

    this.snackToBeAdded = new Snack;
    this.snackToBeAdded.snackName = this.snackName;
    this.snackToBeAdded.description = this.snackDesc;
    this.snackToBeAdded.cost = this.snackCost;
    this.snackToBeAdded.totalFat = this.snackFat;
    this.snackToBeAdded.cholesterol = this.snackCholesterol;
    this.snackToBeAdded.totalCarbs = this.snackCarbs;
    this.snackToBeAdded.sodium = this.snackSodium;
    snackTypes.push(tempSnackType);
    this.snackToBeAdded.types = snackTypes;
    console.log(this.snackToBeAdded);
    console.log("THIS IS VM ID: "+ this.userVending.id);

    this.snackService.addSnackToVM(this.snackToBeAdded, this.userVending.id).subscribe(
      resp => {
        this.statusCode = resp.status;
        alert(this.statusCode);
        console.log(resp.body);
        //window.location.reload();
      }
    );

  }

  closeOverlay(){
    document.getElementById('addSnackOverlay').style.display = 'none';
  }

  vendingUpdate() {
    console.log('The button actually works');
    this.vendingService.update(this.userVending).subscribe(
      resp => {
        console.log('WERE RECEIVING THIS BAK ' + resp);
        console.log(resp.body);
        console.log(resp.status);
        this.userVending = resp.body;
        this.statusCode = resp.status;
        console.log('HEY THIS IS UPDATED VENDING MACHINE ' + this.userVending);
        window.location.reload();
      }
    );
    console.log('The update method ran');
  }
}
