"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var typeorm_1 = require("typeorm");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], User.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)()
    ], User.prototype, "uptdatedAt");
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], User.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ name: 'mail', type: 'varchar', length: 500 })
    ], User.prototype, "mail");
    __decorate([
        (0, typeorm_1.Column)({ name: 'password', type: 'varchar', length: 1000 })
    ], User.prototype, "password");
    return User;
}());
exports.User = User;
