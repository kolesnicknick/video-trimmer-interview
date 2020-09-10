"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WinstonModule = void 0;
var common_1 = require("@nestjs/common");
var winston_providers_1 = require("./winston.providers");
var WinstonModule = /** @class */ (function () {
    /**
     * Represents a Winston Module
     */
    function WinstonModule() {
    }
    WinstonModule_1 = WinstonModule;
    /**
     * Constructor for winson module
     * @param options
     */
    WinstonModule.forRoot = function (options) {
        var providers = winston_providers_1.createWinstonProviders(options);
        return {
            module: WinstonModule_1,
            providers: providers,
            exports: providers,
        };
    };
    /**
     * Asynchronous constructor for winston module
     * @param options
     */
    WinstonModule.forRootAsync = function (options) {
        var providers = winston_providers_1.createWinstonAsyncProviders(options);
        return {
            module: WinstonModule_1,
            imports: options.imports,
            providers: providers,
            exports: providers,
        };
    };
    var WinstonModule_1;
    WinstonModule = WinstonModule_1 = __decorate([
        common_1.Global(),
        common_1.Module({})
        /**
         * Represents a Winston Module
         */
    ], WinstonModule);
    return WinstonModule;
}());
exports.WinstonModule = WinstonModule;
