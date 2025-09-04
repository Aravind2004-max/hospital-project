import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HospitalService } from '../hospital-service';
@Component({
  selector: 'app-discharge',
  imports: [FormsModule],
  templateUrl: './discharge.html',
  styleUrl: './discharge.css'
})
export class Discharge {

  constructor(private service:HospitalService){}

  id:string = "";
  sts:string = "";

  deleteDetails(){
    this.service.deleteDetails(this.id).subscribe({
      next:async(res)=>{this.sts = res},
      error:(err)=>{this.sts = err.message},
    });
  }
}
