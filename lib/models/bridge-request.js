"use strict";
var ircLib = require("../irclib/irc");
var logging = require("../logging");
var log = logging.get("req");

class BridgeRequest {
    constructor(req, isFromIrc) {
        this.isFromIrc = isFromIrc;
        this.req = req;
        this.log = logging.newRequestLogger(log, req.getId(), isFromIrc);
        this.ircLib = ircLib.getIrcLibFor(this);
    }

    getPromise() {
        return this.req.getPromise();
    }

    resolve(thing) {
        this.req.resolve(thing);
    }

    reject(err) {
        this.req.reject(err);
    }
}
BridgeRequest.ERR_VIRTUAL_USER = "virtual-user";

module.exports = BridgeRequest;