"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var express_1 = __importDefault(require("express"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var corsOptions_1 = require("./utils/corsOptions");
var configdb_1 = require("./database/configdb");
var validateEnv_1 = __importDefault(require("./utils/validateEnv"));
var index_1 = __importDefault(require("./routes/index"));
var PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
configdb_1.AppDataSource.initialize()
    .then(function () {
    // VALIDATE ENV
    (0, validateEnv_1.default)();
    console.log("Data Source has been initialized!");
    var app = (0, express_1.default)();
    // 2. Logger
    if (process.env.NODE_ENV === "development")
        app.use((0, morgan_1.default)("dev"));
    // Cross Origin Resource Sharing
    app.use((0, cors_1.default)(corsOptions_1.corsOptions));
    // built-in middleware to handle urlencoded form data
    app.use(express_1.default.urlencoded({ extended: false }));
    // built-in middleware for json
    app.use(express_1.default.json({ limit: "10kb" }));
    //middleware for cookies
    //middleware for cookies
    app.use((0, cookie_parser_1.default)());
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
