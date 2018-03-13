"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var glob = require("glob");
var _ = require("lodash");
var mkdir = require("make-dir");
var nock = require("nock");
var path = require("path");
var url = require("url");
var rev_hash = require("rev-hash");
function restore() {
    nock.restore();
    nock.recorder.clear();
    nock.cleanAll();
    nock.activate();
}
exports.restore = restore;
function enable_net_connect() {
    nock.enableNetConnect();
}
exports.enable_net_connect = enable_net_connect;
function disable_net_connect() {
    nock.disableNetConnect();
}
exports.disable_net_connect = disable_net_connect;
function play_nocks(dirname) {
    var records = load_records(dirname);
    nock.define(records).forEach(function (scope) { return scope.persist(); });
}
exports.play_nocks = play_nocks;
function start_record() {
    nock.recorder.rec({
        output_objects: true,
        dont_print: true,
    });
}
exports.start_record = start_record;
function finish_record(dirname) {
    nock.recorder.play().forEach(function (record) {
        return write_record(record, dirname);
    });
}
exports.finish_record = finish_record;
function load_records(dirname) {
    var record_extname = get_record_extname();
    return glob
        .sync(dirname + "/**/*" + record_extname)
        .map(function (filename) { return JSON.parse(fs.readFileSync(filename, 'utf8')); });
}
function write_record(record, dirname) {
    var record_filename = get_record_filename(record, dirname);
    mkdir.sync(path.dirname(record_filename));
    fs.writeFileSync(record_filename, JSON.stringify(record, null, 2), 'utf8');
}
function get_record_filename(record, dirname) {
    var record_relative_dirname = get_record_relative_dirname(record);
    var record_basename = get_record_basename(record);
    var record_extname = get_record_extname();
    return path.join(dirname, record_relative_dirname, "" + record_basename + record_extname);
}
function get_record_relative_dirname(record) {
    return _.defaultTo(url.parse(record.scope).hostname, 'unknown');
}
function get_record_basename(record) {
    var method = _.defaultTo(record.method, 'unknown').toLowerCase();
    var pathname = record.path.split('?')[0];
    var formatted_pathname = _.kebabCase(pathname);
    var hash = rev_hash(method + "+" + record.status + "+" + record.scope + "+" + record.path + "+" + record.body);
    return formatted_pathname.length === 0
        ? method + "+" + hash
        : method + "+" + formatted_pathname + "+" + hash;
}
function get_record_extname() {
    return '.nock.json';
}
