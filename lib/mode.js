"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var index_1 = require("./actions/index");
function mode_to_action(mode, mode_env) {
    switch (_.defaultTo(process.env[mode_env], mode)) {
        case "run" /* Run */:
            return new index_1.RunAction();
        case "play" /* Play */:
            return new index_1.PlayAction();
        case "record" /* Record */:
            return new index_1.RecordAction();
        case "real" /* Real */:
            return new index_1.RealAction();
        default:
            throw new Error("Unexpected mode '" + mode + "'");
    }
}
exports.mode_to_action = mode_to_action;
