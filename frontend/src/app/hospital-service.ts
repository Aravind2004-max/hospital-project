import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  constructor(private httpMethods : HttpClient){}
  apiUrl : string = "http://localhost:3000/hospital";

  getDetails():Observable<any>{
    return this.httpMethods.get(this.apiUrl+"/patientDetails");
  }

  insertAdmission(datas:any):Observable<any>{
    return this.httpMethods.post(this.apiUrl+"/admission",datas);
  }

  updateAdmission(datas:any):Observable<any>{
    return this.httpMethods.put(this.apiUrl+"/admission/update",datas);
  }

  deleteDetails(id:any):Observable<any>{
    return this.httpMethods.delete(this.apiUrl+`/discharge/${id}`);
  }

  getById(id:any):Observable<any>{
    return this.httpMethods.get(this.apiUrl+`/get/:${id}`);
  }
}
