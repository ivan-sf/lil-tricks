"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tricksController_1 = __importDefault(require("../controllers/tricksController"));
class TricksRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', tricksController_1.default.create);
        this.router.get('/', tricksController_1.default.read);
        this.router.get('/:id', tricksController_1.default.readOne);
        this.router.put('/:id', tricksController_1.default.update);
        this.router.delete('/:id', tricksController_1.default.delete);
    }
}
const tricksRoutes = new TricksRoutes();
exports.default = tricksRoutes.router;
