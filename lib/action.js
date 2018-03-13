"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Action = /** @class */ (function () {
    function Action() {
    }
    Action.prototype.setup = function (options) {
        this.options = options;
        this.debug("init " + this.get_contructor_name() + " with " + JSON.stringify(options, null, 2));
        return this;
    };
    Action.prototype.debug = function (message) {
        if (this.options.debug) {
            console.log(message); // tslint:disable-line:no-console
        }
    };
    Action.prototype.get_contructor_name = function () {
        return this.constructor.name;
    };
    return Action;
}());
exports.Action = Action;
