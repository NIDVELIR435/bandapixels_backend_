"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppConfigModule = void 0;
var common_1 = require("@nestjs/common");
var config_1 = require("@nestjs/config");
var db_config_1 = require("@backend/modules/config/models/db.config");
var app_config_1 = require("@backend/modules/config/models/app.config");
var AppConfigModule = /** @class */ (function () {
    function AppConfigModule() {
    }
    AppConfigModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({
                    isGlobal: true
                }),
            ],
            providers: [app_config_1.AppConfig, app_config_1.AppConfig, config_1.ConfigService, db_config_1.DbConfig],
            exports: [app_config_1.AppConfig, app_config_1.AppConfig, db_config_1.DbConfig]
        })
    ], AppConfigModule);
    return AppConfigModule;
}());
exports.AppConfigModule = AppConfigModule;
