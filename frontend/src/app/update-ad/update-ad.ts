import { Component } from '@angular/core';
import { HospitalService } from '../hospital-service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-update-ad',
  imports: [FormsModule],
  templateUrl: './update-ad.html',
  styleUrl: './update-ad.css'
})
export class UpdateAd {

  constructor(private service:HospitalService){}

  datas = {
    id:"",
    name:"",
    diseases:"",
  }

  sts:string = "";
  
  onUpdate():void{
    this.service.updateAdmission(this.datas).subscribe({
      next:(res)=>{this.sts = res},
      error:(err) => {this.sts = err.message},
    });
    this.datas.id = "",
    this.datas.name = "",
    this.datas.diseases = ""
  }
}
