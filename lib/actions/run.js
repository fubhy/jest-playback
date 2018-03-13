"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var action_1 = require("../action");
var utils_1 = require("../utils");
var RunAction = /** @class */ (function (_super) {
    __extends(RunAction, _super);
    function RunAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RunAction.prototype.start = function () {
        utils_1.restore();
        utils_1.enable_net_connect();
        utils_1.play_nocks(this.options.playbacks);
    };
    RunAction.prototype.finish = function () {
        // do nothing
    };
    return RunAction;
}(action_1.Action));
exports.RunAction = RunAction;
