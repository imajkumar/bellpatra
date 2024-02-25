"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get("/", function (req, res) {
    return res.json({
        message: "Hello from Docker this ok 999k 🎉",
    });
});
exports.default = router;
