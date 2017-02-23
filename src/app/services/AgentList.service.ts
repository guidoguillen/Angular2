import { Injectable } from '@angular/core';

import { CampaingSummaryBySkill } from '../component/app.component';

// Importar objetos de la librería http
import { HttpModule, Http, Response, RequestOptions, Headers } from '@angular/http';  
import { Observable }     from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AgentListService  {
    
  //public _http: Http;
  private headers: Headers;
   
   constructor ( private http: Http ) {}

   createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('e8ba5982-8e0f-4040-88f5-5015443f3606:96a002d3-e97f-4951-9d36-6380d57efe22')); 
   }
 
    getAgentList() : Observable<CampaingSummaryBySkill[]> {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get('https://legacyreports.apispark.net:443/v1/campaingSummaryBySkills/', {headers: headers})
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
    }
}
