"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => res.json({
    message: "Hello from Docker this ok 999k 🎉",
}));
exports.default = router;
