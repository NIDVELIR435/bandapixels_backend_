"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var http_status_codes_1 = require("http-status-codes");
var AppController = /** @class */ (function () {
    function AppController() {
    }
    AppController.prototype.healthCheck = function () {
        return { success: true };
    };
    __decorate([
        (0, common_1.Get)('healthCheck'),
        (0, swagger_1.ApiExcludeEndpoint)(),
        (0, common_1.HttpCode)(http_status_codes_1.StatusCodes.OK)
    ], AppController.prototype, "healthCheck");
    AppController = __decorate([
        (0, common_1.Controller)()
    ], AppController);
    return AppController;
}());
exports.AppController = AppController;
