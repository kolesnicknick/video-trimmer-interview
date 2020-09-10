"use strict";
exports.__esModule = true;
exports.createWinstonAsyncProviders = exports.createWinstonProviders = void 0;
var winston_1 = require("winston");
var winston_constants_1 = require("./winston.constants");
/**
 * Constructor a winston provider
 * @param loggerOpts
 */
exports.createWinstonProviders = function (loggerOpts) {
    return [
        {
            provide: winston_constants_1.WINSTON_MODULE_PROVIDER,
            useFactory: function () { return winston_1.createLogger(loggerOpts); },
        },
    ];
};
/**
 * Async constructor for a winston provider
 * @param options
 */
exports.createWinstonAsyncProviders = function (options) {
    return [
        {
            provide: winston_constants_1.WINSTON_MODULE_OPTIONS,
            useFactory: options.useFactory,
            inject: options.inject || [],
        },
        {
            provide: winston_constants_1.WINSTON_MODULE_PROVIDER,
            useFactory: function (loggerOpts) { return winston_1.createLogger(loggerOpts); },
            inject: [winston_constants_1.WINSTON_MODULE_OPTIONS],
        },
    ];
};
