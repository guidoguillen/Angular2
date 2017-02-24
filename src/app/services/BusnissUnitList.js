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
// Importar objetos de la librería http
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var CampaingSummaryBySkillService = (function () {
    function CampaingSummaryBySkillService(http) {
        this.http = http;
    }
    CampaingSummaryBySkillService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Basic ' +
            btoa('e8ba5982-8e0f-4040-88f5-5015443f3606:96a002d3-e97f-4951-9d36-6380d57efe22'));
    };
    CampaingSummaryBySkillService.prototype.getCampaingSummaryBySkillList = function () {
        var headers = new http_1.Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get('https://legacyreports.apispark.net:443/v1/campaingSummaryBySkills/', { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    CampaingSummaryBySkillService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CampaingSummaryBySkillService);
    return CampaingSummaryBySkillService;
}());
exports.CampaingSummaryBySkillService = CampaingSummaryBySkillService;
//# sourceMappingURL=BusnissUnitList.js.map