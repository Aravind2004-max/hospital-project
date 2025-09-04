import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalService } from '../hospital-service';
@Component({
  selector: 'app-admission-details',
  imports: [CommonModule],
  templateUrl: './admission-details.html',
  styleUrl: './admission-details.css'
})
export class AdmissionDetails implements OnInit {

  constructor(private service:HospitalService){}
  patients : any[] = [];
  sts : string = "";

  ngOnInit(): void {
    this.service.getDetails().subscribe({
      next:(res)=>{this.patients = res},
      error:(err)=>{this.sts = err.message},
    });
  }

}
