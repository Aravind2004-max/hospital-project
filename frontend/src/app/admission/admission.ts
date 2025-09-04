import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { HospitalService } from '../hospital-service';

@Component({
  selector: 'app-admission',
  imports: [FormsModule],
  templateUrl: './admission.html',
  styleUrl: './admission.css'
})
export class Admission {

  constructor(private routes : Router,private service:HospitalService){}

  public datas = {
    id:"",
    name:"",
    diseases:"",
  }

  sts:string = "";

  onSubmit(form: NgForm){
    this.service.insertAdmission(this.datas).subscribe(
      {
        next:(res)=>{this.sts = res},
        error:(err)=>{this.sts = err.message},
      }
    );
    form.resetForm();
  }

  update(){
    this.routes.navigate(["/admission/update"])
  }

  patientDetails(){
    this.routes.navigate(["/admission/patientDetails"]);
  }
}
