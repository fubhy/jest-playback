"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var path = require("path");
var mode_1 = require("./mode");
var Reporter = /** @class */ (function () {
    function Reporter(global_config, options) {
        if (options === void 0) { options = {}; }
        this.global_config = global_config;
        this.init_options(options);
        this.init_action();
    }
    Reporter.prototype.init_action = function () {
        this.action = mode_1.mode_to_action(this.options.mode, this.options.mode_env).setup(this.options);
    };
    Reporter.prototype.init_options = function (options) {
        this.options = _.defaults(options, {
            debug: false,
            mode: "run" /* Run */,
            mode_env: 'JEST_PLAYBACK_MODE',
            playbacks: '<rootDir>/playbacks',
        });
        this.options.playbacks = path.resolve(process.cwd(), this.options.playbacks.replace('<rootDir>', this.global_config.rootDir));
    };
    // tslint:disable-next-line:naming-convention
    Reporter.prototype.onRunStart = function () {
        this.action.start();
    };
    // tslint:disable-next-line:naming-convention
    Reporter.prototype.onRunComplete = function () {
        this.action.finish();
    };
    return Reporter;
}());
exports.Reporter = Reporter;
