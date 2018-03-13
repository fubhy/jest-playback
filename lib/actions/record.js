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
var RecordAction = /** @class */ (function (_super) {
    __extends(RecordAction, _super);
    function RecordAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecordAction.prototype.start = function () {
        utils_1.restore();
        utils_1.enable_net_connect();
        utils_1.start_record();
    };
    RecordAction.prototype.finish = function () {
        utils_1.finish_record(this.options.playbacks);
    };
    return RecordAction;
}(action_1.Action));
exports.RecordAction = RecordAction;