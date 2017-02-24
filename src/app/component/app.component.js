"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var campaingSummaryBySkill_service_1 = require('../services/campaingSummaryBySkill.service');
// Class definition
var CampaingSummaryBySkill = (function () {
    function CampaingSummaryBySkill() {
    }
    return CampaingSummaryBySkill;
}());
exports.CampaingSummaryBySkill = CampaingSummaryBySkill;
var AppComponent = (function () {
    // Injectamos el Servicio
    function AppComponent(campaingSummaryBySkillService) {
        this.campaingSummaryBySkillService = campaingSummaryBySkillService;
        this.title = 'Busines intelligence Reports ';
    }
    // Metodo el cual llama al Servicio
    AppComponent.prototype.loadReport = function () {
        var _this = this;
        this.campaingSummaryBySkillService.getCampaingSummaryBySkillList()
            .subscribe(function (campaingSummaryBySkill) { return _this.campaingSummaryBySkill = campaingSummaryBySkill; }, function (err) { console.log(err); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>Campaing Summary By Skill</h2>\n    <div>\n    <button (click)=\"loadReport()\">Get Business Intelligence Report 2</button>\n    <table>\n        <thead>\n            <th align=\"left\">Skill Id</th>\n            <th align=\"left\">Name</th>\n            <th align=\"left\">Duration</th>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let row of campaingSummaryBySkill\">\n                <td>{{row.skillID}}</td>\n                <td>{{row.skillName}}</td>\n                <td align=\"right\">{{row.duration}}</td>\n            </tr>\n        </tbody>\n    </table>    \n    </div>\n  ",
            // incluir el provaider que hara la llamada
            providers: [campaingSummaryBySkill_service_1.CampaingSummaryBySkillService]
        }), 
        __metadata('design:paramtypes', [campaingSummaryBySkill_service_1.CampaingSummaryBySkillService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map