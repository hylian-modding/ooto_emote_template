"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CoreInjection_1 = require("modloader64_api/CoreInjection");
const EventHandler_1 = require("modloader64_api/EventHandler");
const OotoAPI_1 = require("./OotoAPI/OotoAPI");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class default_dance {
    preinit() {
    }
    init() {
        let zz = this['metadata']['emote'];
        let e = { name: zz.name, buf: fs_1.default.readFileSync(path_1.default.resolve(__dirname, zz.anim)) };
        if (zz.sound !== '') {
            e.sound = fs_1.default.readFileSync(path_1.default.resolve(__dirname, zz.sound));
        }
        EventHandler_1.bus.emit(OotoAPI_1.OotOnlineEvents.ON_REGISTER_EMOTE, e);
    }
    postinit() {
    }
    onTick(frame) {
    }
}
__decorate([
    CoreInjection_1.InjectCore()
], default_dance.prototype, "core", void 0);
module.exports = default_dance;
//# sourceMappingURL=default_dance.js.map