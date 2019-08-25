import { Component, OnInit } from '@angular/core';
import {Cab} from 'src/app/models/Cab';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CabsService} from 'src/app/services/cabs.service';

@Component({
  selector: 'app-cab-register',
  templateUrl: './cab-register.component.html',
  styleUrls: ['./cab-register.component.css']
})
export class CabRegisterComponent implements OnInit {
    cab: Cab;
    cabForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _cabsService: CabsService,
  ) { }

  ngOnInit() {
    this.cabForm = this.fb.group({
      cabNumber: ['',Validators.required],
      cabDriverName: ['',Validators.required],
      driverPhone:['',Validators.required],
      driverLicenceNumber: ['',Validators.required],
      cabOwnerName: ['', Validators.required]

      });
    }
  onSubmit() {
    let cab = new Cab();
    cab.cab_number = this.cabForm.get('cabNumber').value
    cab.driver_name = this.cabForm.get('cabDriverName').value
    cab.driver_phone = this.cabForm.get('driverPhone').value
    cab.licence_number = this.cabForm.get('driverLicenceNumber').value
    cab.owner_name = this.cabForm.get('cabOwnerName') .value
    console.log(cab)
     this. _cabsService.save(cab).subscribe(
  () => {
    alert('cab has been registered succesfully.!!');
    this.cabForm.setValue({
      cabNumber:'',
      cabDriverName:'',
      driverPhone:'',
      driverLicenceNumber:'',
      cabOwnerName:''
    });
  }
)
}
}
