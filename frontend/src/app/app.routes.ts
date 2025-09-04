import { Routes } from '@angular/router';
import { Admission } from './admission/admission';
import { Discharge } from './discharge/discharge';
import { UpdateAd } from './update-ad/update-ad';
import { AdmissionDetails } from './admission-details/admission-details';

export const routes: Routes = [
    {path:"admission",component:Admission},
    {path:"discharge",component:Discharge},
    {path:"admission/update",component:UpdateAd},
    {path:"admission/patientDetails",component:AdmissionDetails},
];
