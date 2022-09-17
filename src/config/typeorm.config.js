"use strict";
exports.__esModule = true;
exports.typeOrmAsyncConfig = void 0;
var user_entity_1 = require("../entity/user.entity");
exports.typeOrmAsyncConfig = {
    useFactory: function () { return ({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "bandapixels",
        password: "bandapixels",
        database: "bandapixels",
        dropSchema: true,
        synchronize: true,
        entities: [user_entity_1.User],
        subscribers: [],
        migrations: []
    }); }
};
