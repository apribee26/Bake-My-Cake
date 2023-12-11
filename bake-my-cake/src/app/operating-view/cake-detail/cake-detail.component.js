var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
System.register("models/cakes", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            // export const Cakes: Cake[] = [
            //     { id: 1, name: 'Bring Dessert Cookie Cake 10`',price:'31.00', description:'One Classic cookie flavor, your choice of decorative icing and up to (2) toppings. Up to (8) servings.'},
            //     { id: 2, name: '6` Cookie Cake',price:'17.75', description:'We`ve taken your favorite Deluxe cookie flavor and turned it into a delicious 6.Serves up to 4.'},
            //     { id: 3, name: 'Sid`s Ice Cream Cookie-Cake"',price:'44.50',description:'eriously. It’s like a cloud of Devil’s Food Cake rained down Cookies into a sea of ice cream. Okay, it’s not exactly like that, but it’s close.Serves 12.'},
            // ];
        }
    };
});
System.register("services/cakes.service", ["@angular/core"], function (exports_2, context_2) {
    "use strict";
    var core_1, CakesService;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            exports_2("CakesService", CakesService = (() => {
                let _classDecorators = [core_1.Injectable({
                        providedIn: 'root'
                    })];
                let _classDescriptor;
                let _classExtraInitializers = [];
                let _classThis;
                var CakesService = _classThis = class {
                    constructor(http) {
                        this.http = http;
                        this.URL = "http://localhost:3003/cakes";
                    }
                    getCakes() {
                        return this.http.get(this.URL);
                    }
                    getCake(id) {
                        return this.http.get(`${this.URL}/${id}`);
                    }
                };
                __setFunctionName(_classThis, "CakesService");
                (() => {
                    __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
                    CakesService = _classThis = _classDescriptor.value;
                    __runInitializers(_classThis, _classExtraInitializers);
                })();
                return CakesService = _classThis;
            })());
        }
    };
});
System.register("operating-view/cake-detail/cake-detail.component", ["@angular/core"], function (exports_3, context_3) {
    "use strict";
    var core_2, CakeDetailComponent;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (core_2_1) {
                core_2 = core_2_1;
            }
        ],
        execute: function () {
            exports_3("CakeDetailComponent", CakeDetailComponent = (() => {
                let _classDecorators_1 = [core_2.Component({
                        selector: 'app-cake-detail',
                        templateUrl: './cake-detail.component.html',
                        styleUrls: ['./cake-detail.component.css']
                    })];
                let _classDescriptor_1;
                let _classExtraInitializers_1 = [];
                let _classThis_1;
                var CakeDetailComponent = _classThis_1 = class {
                    constructor(activatedRoute, cakesService) {
                        this.activatedRoute = activatedRoute;
                        this.cakesService = cakesService;
                        this.cake = { name: '', price: '', description: '' };
                    }
                    ngOnInit() {
                        this.activatedRoute.paramMap.subscribe(params => {
                            var _a;
                            let id = (_a = params.get("id")) !== null && _a !== void 0 ? _a : 0;
                            this.cakesService.getCake(+id).subscribe(data => {
                                this.cake = data;
                            });
                        });
                    }
                };
                __setFunctionName(_classThis_1, "CakeDetailComponent");
                (() => {
                    __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
                    CakeDetailComponent = _classThis_1 = _classDescriptor_1.value;
                    __runInitializers(_classThis_1, _classExtraInitializers_1);
                })();
                return CakeDetailComponent = _classThis_1;
            })());
        }
    };
});
