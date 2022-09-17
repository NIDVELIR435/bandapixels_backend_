"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.AppModule = void 0;
var typeorm_1 = require("@nestjs/typeorm");
var config_1 = require("@nestjs/config");
var common_1 = require("@nestjs/common");
var Entities = require("./entity");
var app_controller_1 = require("@backend/app.controller");
var app_service_1 = require("@backend/app.service");
var app_config_module_1 = require("@backend/modules/config/app.config.module");
var db_config_1 = require("@backend/modules/config/models/db.config");
var users_module_1 = require("@backend/modules/users/users.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({
                    envFilePath: (function () {
                        var actualEnv = process.env['NODE_ENV'];
                        var fallbackChain = [".env.".concat(actualEnv)];
                        if (actualEnv === null || actualEnv === void 0 ? void 0 : actualEnv.startsWith('feature'))
                            fallbackChain.push('.env.development');
                        return __spreadArray([".env.local"], fallbackChain, true);
                    })(),
                    isGlobal: true
                }),
                app_config_module_1.AppConfigModule,
                typeorm_1.TypeOrmModule.forRootAsync({
                    imports: [app_config_module_1.AppConfigModule],
                    inject: [db_config_1.DbConfig],
                    useFactory: function (dbConfig) { return __awaiter(void 0, void 0, void 0, function () {
                        var database, password, username, port, host, logging, synchronize;
                        return __generator(this, function (_a) {
                            database = dbConfig.database, password = dbConfig.password, username = dbConfig.username, port = dbConfig.port, host = dbConfig.host, logging = dbConfig.logging, synchronize = dbConfig.synchronize;
                            return [2 /*return*/, {
                                    type: 'postgres',
                                    host: host,
                                    port: port,
                                    username: username,
                                    password: password,
                                    database: database,
                                    entities: Object.values(Entities),
                                    logging: logging,
                                    synchronize: synchronize
                                }];
                        });
                    }); }
                }),
                users_module_1.UsersModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;