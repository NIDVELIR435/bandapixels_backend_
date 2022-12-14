"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppConfigService = void 0;
var common_1 = require("@nestjs/common");
var AppConfigService = /** @class */ (function () {
    function AppConfigService(configService) {
        this.configService = configService;
    }
    AppConfigService.prototype.get = function (name) {
        var value = this.configService.get(name);
        if (value === undefined) {
            throw new common_1.InternalServerErrorException("".concat(name, " parameter does not specified in .env file"));
        }
        return value;
    };
    AppConfigService.prototype.getOptional = function (name) {
        return this.configService.get(name);
    };
    AppConfigService = __decorate([
        (0, common_1.Injectable)()
    ], AppConfigService);
    return AppConfigService;
}());
exports.AppConfigService = AppConfigService;
