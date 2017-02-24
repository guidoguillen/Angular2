
import { Component } from '@angular/core';
import { CampaingSummaryBySkillService } from '../services/campaingSummaryBySkill.service';


import { Http } from "@angular/http";



// Class definition
export class CampaingSummaryBySkill {
  skillID: number;
  skillName: string;
  duration: number;
}

@Component({

  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Campaing Summary By Skill</h2>
    <div>
    <button (click)="loadReport()">Get Business Intelligence Report 2</button>
    <table>
        <thead>
            <th align="left">Skill Id</th>
            <th align="left">Name</th>
            <th align="left">Duration</th>
        </thead>
        <tbody>
            <tr *ngFor="let row of campaingSummaryBySkill">
                <td>{{row.skillID}}</td>
                <td>{{row.skillName}}</td>
                <td align="right">{{row.duration}}</td>
            </tr>
        </tbody>
    </table>    
    </div>
  `,
  // incluir el provaider que hara la llamada
  providers: [CampaingSummaryBySkillService]
})


export class AppComponent  { 
  title = 'Busines intelligence Reports ';

  // Local properties
  campaingSummaryBySkill: CampaingSummaryBySkill[];

  // Injectamos el Servicio
  constructor(private campaingSummaryBySkillService: CampaingSummaryBySkillService) { }

  // Metodo el cual llama al Servicio
  loadReport() {
    this.campaingSummaryBySkillService.getCampaingSummaryBySkillList("all","one",1,"two")
                                      .subscribe(
                                          campaingSummaryBySkill => this.campaingSummaryBySkill = campaingSummaryBySkill,
                                          err => {console.log(err);}
                                      );
  }
}









