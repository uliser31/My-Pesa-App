import { Component } from '@angular/core';
import {WeightService} from './services/weight.service';
import {OdooService} from './services/odoo.service'
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Partner} from './models/partner'

//https://www.itsolutionstuff.com/post/angular-10-select-dropdown-example-tutorialexample.html
//form
//https://www.youtube.com/watch?v=33xfj_I51B0
//https://stackoverflow.com/questions/38064592/angular-2-form-validation-minlength-validator-is-not-working

//angular.io form
//https://angular.io/guide/reactive-forms

//https://www.youtube.com/watch?v=arGRTVdG--c

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-pesa-app';
  id: any;

  //partners : Partner[]=[];
    
  partnerForm = new FormGroup({
    partner : new FormControl('',[Validators.required])
  });


  constructor(public weightService: WeightService,
              public odooService: OdooService ){
   
  }

  ngOnInit(): void {
    
    this.getPartners();

    this.getWeight();
    this.id = setInterval(()=>{
      this.getWeight();
    },500);

    this.partnerForm.get('partners')?.valueChanges.subscribe(
      value => console.log(value)
    );
  }
  
  onSubmit(){}
  
  ngOnDestroy(){
    if (this.id){
      clearInterval(this.id);
    }
  }
  getWeight(){
    this.weightService.getWeight().subscribe(
      res => this.weightService.weight = res,
      err => console.log(err)
    );
  }
  
  getPartners(){
    this.odooService.getPartners().subscribe(  
      //res => this.odooService.partners = res,
      res => this.odooService.partners = res,
      err => console.log(err)
    ); 
  }
}