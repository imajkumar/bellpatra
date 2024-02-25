"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var configdb_1 = require("./database/configdb");
var index_1 = __importDefault(require("./routes/index"));
var PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
configdb_1.AppDataSource.initialize()
    .then(function () {
    console.log("Database connected");
    console.log("Data Source has been initialized!");
    var app = (0, express_1.default)();
    // built-in middleware to handle urlencoded form data
    app.use(express_1.default.urlencoded({ extended: false }));
    // built-in middleware for json
    app.use(express_1.default.json({ limit: "10kb" }));
    //middleware for cookies
    //Route Prefixes
    app.use("/", index_1.default);
    app.listen(PORT, function () {
        console.log("Server running on port ".concat(PORT));
    });
})
    .catch(function (err) {
    console.log(err);
    process.exit(1);
});
