"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnalytics = exports.handleRedirect = exports.createShortUrl = void 0;
const shortURL_model_1 = __importDefault(require("../models/shortURL.model"));
const analytics_model_1 = __importDefault(require("../models/analytics.model"));
const createShortUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { destination } = req.body;
    const newUrl = yield shortURL_model_1.default.create({ destination });
    return res.send(newUrl);
});
exports.createShortUrl = createShortUrl;
const handleRedirect = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { shortId } = req.params;
    const short = yield shortURL_model_1.default.findOne({ shortId }).lean();
    if (short) {
        analytics_model_1.default.create({ shortUrl: short._id });
        res.redirect(short.destination);
    }
    else {
        res.status(404);
    }
});
exports.handleRedirect = handleRedirect;
const getAnalytics = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield analytics_model_1.default.find({}).lean();
    return res.send(data);
});
exports.getAnalytics = getAnalytics;
