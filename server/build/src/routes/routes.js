"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const express_1 = __importDefault(require("express"));
const shortURL_controller_1 = require("../controller/shortURL.controller");
const validateResource_1 = __importDefault(require("../middleware/validateResource"));
const shortUrlSchema_1 = __importDefault(require("../schemas/shortUrlSchema"));
const router = express_1.default.Router();
exports.mainRouter = router;
router.get("/analytics", shortURL_controller_1.getAnalytics);
router.get("/:shortId", shortURL_controller_1.handleRedirect);
router.post("/", (0, validateResource_1.default)(shortUrlSchema_1.default), shortURL_controller_1.createShortUrl);
