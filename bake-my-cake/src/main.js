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
System.register("app/gift-detail/gift-detail.component", ["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var core_1, GiftDetailComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            exports_1("GiftDetailComponent", GiftDetailComponent = (() => {
                let _classDecorators = [core_1.Component({
                        selector: 'app-gift-detail',
                        templateUrl: './gift-detail.component.html',
                        styleUrls: ['./gift-detail.component.css']
                    })];
                let _classDescriptor;
                let _classExtraInitializers = [];
                let _classThis;
                var GiftDetailComponent = _classThis = class {
                    constructor(activatedRoute, giftsService) {
                        this.activatedRoute = activatedRoute;
                        this.giftsService = giftsService;
                        this.gift = { name: '', price: '', description: '' };
                    }
                    ngOnInit() {
                        this.activatedRoute.paramMap.subscribe(params => {
                            var _a;
                            let id = (_a = params.get("id")) !== null && _a !== void 0 ? _a : 0;
                            this.giftsService.getGift(+id).subscribe(data => {
                                this.gift = data;
                            });
                        });
                    }
                };
                __setFunctionName(_classThis, "GiftDetailComponent");
                (() => {
                    __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
                    GiftDetailComponent = _classThis = _classDescriptor.value;
                    __runInitializers(_classThis, _classExtraInitializers);
                })();
                return GiftDetailComponent = _classThis;
            })());
        }
    };
});
System.register("app/cookie-detail/cookie-detail.component", ["@angular/core"], function (exports_2, context_2) {
    "use strict";
    var core_2, CookieDetailComponent;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (core_2_1) {
                core_2 = core_2_1;
            }
        ],
        execute: function () {
            exports_2("CookieDetailComponent", CookieDetailComponent = (() => {
                let _classDecorators_1 = [core_2.Component({
                        selector: 'app-cookie-detail',
                        templateUrl: './cookie-detail.component.html',
                        styleUrls: ['./cookie-detail.component.css']
                    })];
                let _classDescriptor_1;
                let _classExtraInitializers_1 = [];
                let _classThis_1;
                var CookieDetailComponent = _classThis_1 = class {
                    constructor(activatedRoute, cookiesService) {
                        this.activatedRoute = activatedRoute;
                        this.cookiesService = cookiesService;
                        this.cookie = { name: '', price: '', description: '' };
                    }
                    ngOnInit() {
                        this.activatedRoute.paramMap.subscribe(params => {
                            var _a;
                            let id = (_a = params.get("id")) !== null && _a !== void 0 ? _a : 0;
                            this.cookiesService.getCookie(+id).subscribe(data => {
                                this.cookie = data;
                            });
                        });
                    }
                };
                __setFunctionName(_classThis_1, "CookieDetailComponent");
                (() => {
                    __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
                    CookieDetailComponent = _classThis_1 = _classDescriptor_1.value;
                    __runInitializers(_classThis_1, _classExtraInitializers_1);
                })();
                return CookieDetailComponent = _classThis_1;
            })());
        }
    };
});
System.register("app/models/brownies", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            // export const Brownies: Brownie[] = [
            //     { id: 1, name: 'Merry Brownie',price:'4.95', description:'This super chocolaty brownie (made with black cocoa) is packed with sprinkles and crushed candy canes.'},
            //     { id: 2, name: 'Cookie Monster Brownie',price:'4.95', description:'Oreo cookies, fudgy brownies, chunks of chocolate chip cookie, and cookies and cream frosting are truly and impressive combination.'},
            //     { id: 3, name: 'Vegan Chocolate Brownie',price:'4.95',description:'Our vegan take on the “classic brownie” has a sweet, rich chocolaty taste and satisfying chewy texture, all without eggs or butter.'},
            //     { id: 4, name: 'Matcha Brownie',price:'4.95',description:'You will these enjoy moist, rich, dense treats, full of intense matcha flavor.'},
            // ];
        }
    };
});
System.register("app/services/brownies.service", ["@angular/core"], function (exports_4, context_4) {
    "use strict";
    var core_3, BrowniesService;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (core_3_1) {
                core_3 = core_3_1;
            }
        ],
        execute: function () {
            exports_4("BrowniesService", BrowniesService = (() => {
                let _classDecorators_2 = [core_3.Injectable({
                        providedIn: 'root'
                    })];
                let _classDescriptor_2;
                let _classExtraInitializers_2 = [];
                let _classThis_2;
                var BrowniesService = _classThis_2 = class {
                    constructor(http) {
                        this.http = http;
                        this.URL = "http://localhost:3002/brownies";
                    }
                    getBrownies() {
                        return this.http.get(this.URL);
                    }
                    getBrownie(id) {
                        return this.http.get(`${this.URL}/${id}`);
                    }
                };
                __setFunctionName(_classThis_2, "BrowniesService");
                (() => {
                    __esDecorate(null, _classDescriptor_2 = { value: _classThis_2 }, _classDecorators_2, { kind: "class", name: _classThis_2.name }, null, _classExtraInitializers_2);
                    BrowniesService = _classThis_2 = _classDescriptor_2.value;
                    __runInitializers(_classThis_2, _classExtraInitializers_2);
                })();
                return BrowniesService = _classThis_2;
            })());
        }
    };
});
System.register("app/brownie-detail/brownie-detail.component", ["@angular/core"], function (exports_5, context_5) {
    "use strict";
    var core_4, BrownieDetailComponent;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (core_4_1) {
                core_4 = core_4_1;
            }
        ],
        execute: function () {
            exports_5("BrownieDetailComponent", BrownieDetailComponent = (() => {
                let _classDecorators_3 = [core_4.Component({
                        selector: 'app-brownie-detail',
                        templateUrl: './brownie-detail.component.html',
                        styleUrls: ['./brownie-detail.component.css']
                    })];
                let _classDescriptor_3;
                let _classExtraInitializers_3 = [];
                let _classThis_3;
                var BrownieDetailComponent = _classThis_3 = class {
                    constructor(activatedRoute, browniesService) {
                        this.activatedRoute = activatedRoute;
                        this.browniesService = browniesService;
                        this.brownie = { name: '', price: '', description: '' };
                    }
                    ngOnInit() {
                        this.activatedRoute.paramMap.subscribe(params => {
                            var _a;
                            let id = (_a = params.get("id")) !== null && _a !== void 0 ? _a : 0;
                            this.browniesService.getBrownie(+id).subscribe(data => {
                                this.brownie = data;
                            });
                        });
                    }
                };
                __setFunctionName(_classThis_3, "BrownieDetailComponent");
                (() => {
                    __esDecorate(null, _classDescriptor_3 = { value: _classThis_3 }, _classDecorators_3, { kind: "class", name: _classThis_3.name }, null, _classExtraInitializers_3);
                    BrownieDetailComponent = _classThis_3 = _classDescriptor_3.value;
                    __runInitializers(_classThis_3, _classExtraInitializers_3);
                })();
                return BrownieDetailComponent = _classThis_3;
            })());
        }
    };
});
System.register("app/models/cakes", [], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
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
System.register("app/services/cakes.service", ["@angular/core"], function (exports_7, context_7) {
    "use strict";
    var core_5, CakesService;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (core_5_1) {
                core_5 = core_5_1;
            }
        ],
        execute: function () {
            exports_7("CakesService", CakesService = (() => {
                let _classDecorators_4 = [core_5.Injectable({
                        providedIn: 'root'
                    })];
                let _classDescriptor_4;
                let _classExtraInitializers_4 = [];
                let _classThis_4;
                var CakesService = _classThis_4 = class {
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
                __setFunctionName(_classThis_4, "CakesService");
                (() => {
                    __esDecorate(null, _classDescriptor_4 = { value: _classThis_4 }, _classDecorators_4, { kind: "class", name: _classThis_4.name }, null, _classExtraInitializers_4);
                    CakesService = _classThis_4 = _classDescriptor_4.value;
                    __runInitializers(_classThis_4, _classExtraInitializers_4);
                })();
                return CakesService = _classThis_4;
            })());
        }
    };
});
System.register("app/cake-detail/cake-detail.component", ["@angular/core"], function (exports_8, context_8) {
    "use strict";
    var core_6, CakeDetailComponent;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [
            function (core_6_1) {
                core_6 = core_6_1;
            }
        ],
        execute: function () {
            exports_8("CakeDetailComponent", CakeDetailComponent = (() => {
                let _classDecorators_5 = [core_6.Component({
                        selector: 'app-cake-detail',
                        templateUrl: './cake-detail.component.html',
                        styleUrls: ['./cake-detail.component.css']
                    })];
                let _classDescriptor_5;
                let _classExtraInitializers_5 = [];
                let _classThis_5;
                var CakeDetailComponent = _classThis_5 = class {
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
                __setFunctionName(_classThis_5, "CakeDetailComponent");
                (() => {
                    __esDecorate(null, _classDescriptor_5 = { value: _classThis_5 }, _classDecorators_5, { kind: "class", name: _classThis_5.name }, null, _classExtraInitializers_5);
                    CakeDetailComponent = _classThis_5 = _classDescriptor_5.value;
                    __runInitializers(_classThis_5, _classExtraInitializers_5);
                })();
                return CakeDetailComponent = _classThis_5;
            })());
        }
    };
});
System.register("app/models/desserts", [], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [],
        execute: function () {
            // export const Gifts: Gift[] = [
            //     { id: 1, name: 'Merry/Happpy 4-pack',price:'9.50', description:'Six warm,cookies pre-wrapped in a Merry/Happy box sleeve and delivered to your friends and family.'},
            //     { id: 2, name: 'Naughty/Nice 8-pack',price:'17.50', description:'Which list are they on? Give a box of twelve cookies wrapped in our cheeky Naughty/Nice box sleeve.'},
            //     { id: 4, name: 'Sids Present 12-pack',price:'31.00',description:'Twelve warm, brownies or cookies of your choosing with a gift wrap and tag box sleeve. Easy peasy!'},
            //     { id: 4, name: 'Give Cookies 10"Cake', price:'32.00', description:'The gift that keeps on giving. One Classic flavor, your choice of decorative icing, and an optional message applied with buttercream icing and wrapped with a holiday message. Up to 8 servings.'}
            // ];
        }
    };
});
System.register("app/models/cookies", [], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [],
        execute: function () {
            // export const Cookies: Cookie[] = [
            //     { id: 1, name: 'Cookie Monster Cookie',price:'2.95', description:'With a signature blue vanilla dough that stands out for all the best reasons and a incredible lineups of mix-ins like caramel bites, oreos, mini marshmallows, and chocolate chips.'},
            //     { id: 2, name: 'Rudolphs Favorite',price:'2.95', description:'This red cookie will certainly be the first to catch your eye. Red velvet dough with savory creamcheese chip. Do not mistake her density for merely surface-level indulgence.'},
            //     { id: 3, name: 'Chocolate Mint Cookie',price:'2.95',description:'Our take on a favorite flavor combo. A warm dark chocolate cookie with mint chips and chunks of milk chocolate.'},
            //     { id: 4, name: 'Ginger Delight Cookie', price:'2.95', description:'Fall in love with our tender molasses cookie with sweet spices of cinnamon and nutmeg and complimenting flavor of the spicy ginger. Sprinkled with large granulated sugar to make them just as beautiful as they are delicious.'},
            //     { id: 5, name: 'Peanut Butter Cookie', price:'2.95', description:'A total peanut butter stunner. Our soft, sweet peanut butter cookie filled with creamy peanut butter chips'},
            //     { id: 6, name: 'Oatmeal Rasin Cookie', price:'2.95', description:'A treat thats like a hug for the soul. Warm cinnamon and sweet molasses layered with plenty of oatmeal and raisins.'},
            //     { id: 7, name: 'Vegan Chocolate Chip Cookie', price:'2.95', description:'A vegan double chocolate cookie with the same levels of dark chocolate decadence and melty (dairy-free) chocolate chunks.'},
            //     { id: 8, name: 'Vegan Confetti Cookie', price:'2.95', description:'Sweet vanilla and all of the sprinkles make this an extra special vegan treat for an extra special day.'},
            // ];
        }
    };
});
System.register("app/models/products", [], function (exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("app/services/gifts.service", ["@angular/core"], function (exports_12, context_12) {
    "use strict";
    var core_7, GiftsService;
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [
            function (core_7_1) {
                core_7 = core_7_1;
            }
        ],
        execute: function () {
            exports_12("GiftsService", GiftsService = (() => {
                let _classDecorators_6 = [core_7.Injectable({
                        providedIn: 'root'
                    })];
                let _classDescriptor_6;
                let _classExtraInitializers_6 = [];
                let _classThis_6;
                var GiftsService = _classThis_6 = class {
                    constructor(http) {
                        this.http = http;
                        this.URL = "http://localhost:3000/gifts";
                    }
                    getGifts() {
                        return this.http.get(this.URL);
                    }
                    getGift(id) {
                        return this.http.get(`${this.URL}/${id}`);
                    }
                };
                __setFunctionName(_classThis_6, "GiftsService");
                (() => {
                    __esDecorate(null, _classDescriptor_6 = { value: _classThis_6 }, _classDecorators_6, { kind: "class", name: _classThis_6.name }, null, _classExtraInitializers_6);
                    GiftsService = _classThis_6 = _classDescriptor_6.value;
                    __runInitializers(_classThis_6, _classExtraInitializers_6);
                })();
                return GiftsService = _classThis_6;
            })());
        }
    };
});
System.register("app/services/cookies.service", ["@angular/core"], function (exports_13, context_13) {
    "use strict";
    var core_8, CookiesService;
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [
            function (core_8_1) {
                core_8 = core_8_1;
            }
        ],
        execute: function () {
            exports_13("CookiesService", CookiesService = (() => {
                let _classDecorators_7 = [core_8.Injectable({
                        providedIn: 'root'
                    })];
                let _classDescriptor_7;
                let _classExtraInitializers_7 = [];
                let _classThis_7;
                var CookiesService = _classThis_7 = class {
                    constructor(http) {
                        this.http = http;
                        this.URL = "http://localhost:3001/cookies";
                    }
                    getCookies() {
                        return this.http.get(this.URL);
                    }
                    getCookie(id) {
                        return this.http.get(`${this.URL}/${id}`);
                    }
                };
                __setFunctionName(_classThis_7, "CookiesService");
                (() => {
                    __esDecorate(null, _classDescriptor_7 = { value: _classThis_7 }, _classDecorators_7, { kind: "class", name: _classThis_7.name }, null, _classExtraInitializers_7);
                    CookiesService = _classThis_7 = _classDescriptor_7.value;
                    __runInitializers(_classThis_7, _classExtraInitializers_7);
                })();
                return CookiesService = _classThis_7;
            })());
        }
    };
});
System.register("app/services/products.service", ["@angular/core"], function (exports_14, context_14) {
    "use strict";
    var core_9, ProductsService;
    var __moduleName = context_14 && context_14.id;
    return {
        setters: [
            function (core_9_1) {
                core_9 = core_9_1;
            }
        ],
        execute: function () {
            exports_14("ProductsService", ProductsService = (() => {
                let _classDecorators_8 = [core_9.Injectable({
                        providedIn: 'root'
                    })];
                let _classDescriptor_8;
                let _classExtraInitializers_8 = [];
                let _classThis_8;
                var ProductsService = _classThis_8 = class {
                    constructor(http) {
                        this.http = http;
                        this.URL = "http://localhost:3004/products";
                    }
                    getProducts() {
                        return this.http.get(this.URL);
                    }
                    getPoduct(id) {
                        return this.http.get(`${this.URL}/${id}`);
                    }
                };
                __setFunctionName(_classThis_8, "ProductsService");
                (() => {
                    __esDecorate(null, _classDescriptor_8 = { value: _classThis_8 }, _classDecorators_8, { kind: "class", name: _classThis_8.name }, null, _classExtraInitializers_8);
                    ProductsService = _classThis_8 = _classDescriptor_8.value;
                    __runInitializers(_classThis_8, _classExtraInitializers_8);
                })();
                return ProductsService = _classThis_8;
            })());
        }
    };
});
System.register("app/homepage/homepage.component", ["@angular/core"], function (exports_15, context_15) {
    "use strict";
    var core_10, HomepageComponent;
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [
            function (core_10_1) {
                core_10 = core_10_1;
            }
        ],
        execute: function () {
            exports_15("HomepageComponent", HomepageComponent = (() => {
                let _classDecorators_9 = [core_10.Component({
                        selector: 'app-homepage',
                        templateUrl: './homepage.component.html',
                        styleUrls: ['./homepage.component.css'],
                    })];
                let _classDescriptor_9;
                let _classExtraInitializers_9 = [];
                let _classThis_9;
                var HomepageComponent = _classThis_9 = class {
                    constructor(giftsService, cookiesService, browniesService, cakesService, productsService) {
                        this.giftsService = giftsService;
                        this.cookiesService = cookiesService;
                        this.browniesService = browniesService;
                        this.cakesService = cakesService;
                        this.productsService = productsService;
                        this.gifts = [];
                        this.cookies = [];
                        this.brownies = [];
                        this.cakes = [];
                        this.products = [];
                        this.allGifts = "Gifts";
                        this.allCookies = "Cookies";
                        this.allBrownies = "Brownies";
                        this.allCakes = "Cakes";
                    }
                    ngOnInit() {
                        this.giftsService.getGifts().subscribe({
                            next: (data) => {
                                console.log('Gifts', data);
                                this.gifts = data;
                            }
                        });
                        this.cookiesService.getCookies().subscribe({
                            next: (data) => {
                                console.log('Cookies', data);
                                this.cookies = data;
                            }
                        });
                        this.browniesService.getBrownies().subscribe({
                            next: (data) => {
                                console.log('Brownies', data);
                                this.brownies = data;
                            }
                        });
                        this.cakesService.getCakes().subscribe({
                            next: (data) => {
                                console.log('Cakes', data);
                                this.cakes = data;
                            }
                        });
                    }
                    onSearchTextChanged(productName) {
                        this.productsService.getProducts().subscribe({
                            next: data => {
                                if (productName || productName !== '') {
                                    this.products = data.filter(product => { var _a; return (_a = product.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(productName.toLowerCase()); });
                                }
                                else
                                    this.products = data;
                            },
                            error: e => {
                                alert("Network Error !! Please Try Again Later");
                            }
                        });
                    }
                    addToCart(item) {
                        this.products.push(item);
                    }
                };
                __setFunctionName(_classThis_9, "HomepageComponent");
                (() => {
                    __esDecorate(null, _classDescriptor_9 = { value: _classThis_9 }, _classDecorators_9, { kind: "class", name: _classThis_9.name }, null, _classExtraInitializers_9);
                    HomepageComponent = _classThis_9 = _classDescriptor_9.value;
                    __runInitializers(_classThis_9, _classExtraInitializers_9);
                })();
                return HomepageComponent = _classThis_9;
            })());
        }
    };
});
System.register("app/not-found/not-found.component", ["@angular/core"], function (exports_16, context_16) {
    "use strict";
    var core_11, NotFoundComponent;
    var __moduleName = context_16 && context_16.id;
    return {
        setters: [
            function (core_11_1) {
                core_11 = core_11_1;
            }
        ],
        execute: function () {
            exports_16("NotFoundComponent", NotFoundComponent = (() => {
                let _classDecorators_10 = [core_11.Component({
                        selector: 'app-not-found',
                        templateUrl: './not-found.component.html',
                        styleUrls: ['./not-found.component.css']
                    })];
                let _classDescriptor_10;
                let _classExtraInitializers_10 = [];
                let _classThis_10;
                var NotFoundComponent = _classThis_10 = class {
                    constructor() { }
                    ngOnInit() {
                    }
                };
                __setFunctionName(_classThis_10, "NotFoundComponent");
                (() => {
                    __esDecorate(null, _classDescriptor_10 = { value: _classThis_10 }, _classDecorators_10, { kind: "class", name: _classThis_10.name }, null, _classExtraInitializers_10);
                    NotFoundComponent = _classThis_10 = _classDescriptor_10.value;
                    __runInitializers(_classThis_10, _classExtraInitializers_10);
                })();
                return NotFoundComponent = _classThis_10;
            })());
        }
    };
});
System.register("app/shopping-cart/shopping-cart.component", ["@angular/core"], function (exports_17, context_17) {
    "use strict";
    var core_12, ShoppingCartComponent;
    var __moduleName = context_17 && context_17.id;
    return {
        setters: [
            function (core_12_1) {
                core_12 = core_12_1;
            }
        ],
        execute: function () {
            exports_17("ShoppingCartComponent", ShoppingCartComponent = (() => {
                let _classDecorators_11 = [core_12.Component({
                        selector: 'app-shopping-cart',
                        templateUrl: './shopping-cart.component.html',
                        styleUrls: ['./shopping-cart.component.css']
                    })];
                let _classDescriptor_11;
                let _classExtraInitializers_11 = [];
                let _classThis_11;
                var ShoppingCartComponent = _classThis_11 = class {
                };
                __setFunctionName(_classThis_11, "ShoppingCartComponent");
                (() => {
                    __esDecorate(null, _classDescriptor_11 = { value: _classThis_11 }, _classDecorators_11, { kind: "class", name: _classThis_11.name }, null, _classExtraInitializers_11);
                    ShoppingCartComponent = _classThis_11 = _classDescriptor_11.value;
                    __runInitializers(_classThis_11, _classExtraInitializers_11);
                })();
                return ShoppingCartComponent = _classThis_11;
            })());
        }
    };
});
System.register("app/favorites/favorites.component", ["@angular/core"], function (exports_18, context_18) {
    "use strict";
    var core_13, FavoritesComponent;
    var __moduleName = context_18 && context_18.id;
    return {
        setters: [
            function (core_13_1) {
                core_13 = core_13_1;
            }
        ],
        execute: function () {
            exports_18("FavoritesComponent", FavoritesComponent = (() => {
                let _classDecorators_12 = [core_13.Component({
                        selector: 'app-favorites',
                        templateUrl: './favorites.component.html',
                        styleUrls: ['./favorites.component.css']
                    })];
                let _classDescriptor_12;
                let _classExtraInitializers_12 = [];
                let _classThis_12;
                var FavoritesComponent = _classThis_12 = class {
                };
                __setFunctionName(_classThis_12, "FavoritesComponent");
                (() => {
                    __esDecorate(null, _classDescriptor_12 = { value: _classThis_12 }, _classDecorators_12, { kind: "class", name: _classThis_12.name }, null, _classExtraInitializers_12);
                    FavoritesComponent = _classThis_12 = _classDescriptor_12.value;
                    __runInitializers(_classThis_12, _classExtraInitializers_12);
                })();
                return FavoritesComponent = _classThis_12;
            })());
        }
    };
});
System.register("app/app-routing.module", ["@angular/core", "@angular/router", "app/gift-detail/gift-detail.component", "app/cookie-detail/cookie-detail.component", "app/brownie-detail/brownie-detail.component", "app/cake-detail/cake-detail.component", "app/homepage/homepage.component", "app/not-found/not-found.component", "app/shopping-cart/shopping-cart.component", "app/favorites/favorites.component"], function (exports_19, context_19) {
    "use strict";
    var core_14, router_1, gift_detail_component_1, cookie_detail_component_1, brownie_detail_component_1, cake_detail_component_1, homepage_component_1, not_found_component_1, shopping_cart_component_1, favorites_component_1, routes, AppRoutingModule;
    var __moduleName = context_19 && context_19.id;
    return {
        setters: [
            function (core_14_1) {
                core_14 = core_14_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (gift_detail_component_1_1) {
                gift_detail_component_1 = gift_detail_component_1_1;
            },
            function (cookie_detail_component_1_1) {
                cookie_detail_component_1 = cookie_detail_component_1_1;
            },
            function (brownie_detail_component_1_1) {
                brownie_detail_component_1 = brownie_detail_component_1_1;
            },
            function (cake_detail_component_1_1) {
                cake_detail_component_1 = cake_detail_component_1_1;
            },
            function (homepage_component_1_1) {
                homepage_component_1 = homepage_component_1_1;
            },
            function (not_found_component_1_1) {
                not_found_component_1 = not_found_component_1_1;
            },
            function (shopping_cart_component_1_1) {
                shopping_cart_component_1 = shopping_cart_component_1_1;
            },
            function (favorites_component_1_1) {
                favorites_component_1 = favorites_component_1_1;
            }
        ],
        execute: function () {
            routes = [{
                    path: "home",
                    component: homepage_component_1.HomepageComponent
                },
                {
                    path: "gift-detail/:id",
                    component: gift_detail_component_1.GiftDetailComponent
                },
                {
                    path: "cookie-detail/:id",
                    component: cookie_detail_component_1.CookieDetailComponent
                },
                {
                    path: "brownie-detail/:id",
                    component: brownie_detail_component_1.BrownieDetailComponent
                },
                {
                    path: "cake-detail/:id",
                    component: cake_detail_component_1.CakeDetailComponent
                },
                {
                    path: "shopping",
                    component: shopping_cart_component_1.ShoppingCartComponent
                },
                {
                    path: "favorite",
                    component: favorites_component_1.FavoritesComponent
                },
                {
                    path: "",
                    redirectTo: "/home",
                    pathMatch: "full"
                },
                {
                    path: "**",
                    component: not_found_component_1.NotFoundComponent
                }];
            exports_19("AppRoutingModule", AppRoutingModule = (() => {
                let _classDecorators_13 = [core_14.NgModule({
                        imports: [router_1.RouterModule.forRoot(routes)],
                        exports: [router_1.RouterModule]
                    })];
                let _classDescriptor_13;
                let _classExtraInitializers_13 = [];
                let _classThis_13;
                var AppRoutingModule = _classThis_13 = class {
                };
                __setFunctionName(_classThis_13, "AppRoutingModule");
                (() => {
                    __esDecorate(null, _classDescriptor_13 = { value: _classThis_13 }, _classDecorators_13, { kind: "class", name: _classThis_13.name }, null, _classExtraInitializers_13);
                    AppRoutingModule = _classThis_13 = _classDescriptor_13.value;
                    __runInitializers(_classThis_13, _classExtraInitializers_13);
                })();
                return AppRoutingModule = _classThis_13;
            })());
        }
    };
});
System.register("app/app.component", ["@angular/core"], function (exports_20, context_20) {
    "use strict";
    var core_15, AppComponent;
    var __moduleName = context_20 && context_20.id;
    return {
        setters: [
            function (core_15_1) {
                core_15 = core_15_1;
            }
        ],
        execute: function () {
            exports_20("AppComponent", AppComponent = (() => {
                let _classDecorators_14 = [core_15.Component({
                        selector: 'app-root',
                        templateUrl: './app.component.html',
                        styleUrls: ['./app.component.css']
                    })];
                let _classDescriptor_14;
                let _classExtraInitializers_14 = [];
                let _classThis_14;
                var AppComponent = _classThis_14 = class {
                    constructor() {
                        this.title = 'bake-my-cake';
                    }
                };
                __setFunctionName(_classThis_14, "AppComponent");
                (() => {
                    __esDecorate(null, _classDescriptor_14 = { value: _classThis_14 }, _classDecorators_14, { kind: "class", name: _classThis_14.name }, null, _classExtraInitializers_14);
                    AppComponent = _classThis_14 = _classDescriptor_14.value;
                    __runInitializers(_classThis_14, _classExtraInitializers_14);
                })();
                return AppComponent = _classThis_14;
            })());
        }
    };
});
System.register("app/search/search.component", ["@angular/core"], function (exports_21, context_21) {
    "use strict";
    var core_16, SearchComponent;
    var __moduleName = context_21 && context_21.id;
    return {
        setters: [
            function (core_16_1) {
                core_16 = core_16_1;
            }
        ],
        execute: function () {
            exports_21("SearchComponent", SearchComponent = (() => {
                let _classDecorators_15 = [core_16.Component({
                        selector: 'app-search',
                        templateUrl: './search.component.html',
                        styleUrls: ['./search.component.css']
                    })];
                let _classDescriptor_15;
                let _classExtraInitializers_15 = [];
                let _classThis_15;
                let _instanceExtraInitializers = [];
                let _searchTextChanged_decorators;
                let _searchTextChanged_initializers = [];
                var SearchComponent = _classThis_15 = class {
                    constructor() {
                        this.productName = (__runInitializers(this, _instanceExtraInitializers), '');
                        this.searchTextChanged = __runInitializers(this, _searchTextChanged_initializers, new core_16.EventEmitter());
                    }
                    ngOnInit() {
                    }
                    searchProduct() {
                        this.searchTextChanged.emit(this.productName);
                    }
                    clearSearch() {
                        this.productName = "";
                        this.searchTextChanged.emit(this.productName);
                    }
                };
                __setFunctionName(_classThis_15, "SearchComponent");
                (() => {
                    _searchTextChanged_decorators = [core_16.Output()];
                    __esDecorate(null, null, _searchTextChanged_decorators, { kind: "field", name: "searchTextChanged", static: false, private: false, access: { has: obj => "searchTextChanged" in obj, get: obj => obj.searchTextChanged, set: (obj, value) => { obj.searchTextChanged = value; } } }, _searchTextChanged_initializers, _instanceExtraInitializers);
                    __esDecorate(null, _classDescriptor_15 = { value: _classThis_15 }, _classDecorators_15, { kind: "class", name: _classThis_15.name }, null, _classExtraInitializers_15);
                    SearchComponent = _classThis_15 = _classDescriptor_15.value;
                    __runInitializers(_classThis_15, _classExtraInitializers_15);
                })();
                return SearchComponent = _classThis_15;
            })());
        }
    };
});
System.register("app/about-us/about-us.component", ["@angular/core"], function (exports_22, context_22) {
    "use strict";
    var core_17, AboutUsComponent;
    var __moduleName = context_22 && context_22.id;
    return {
        setters: [
            function (core_17_1) {
                core_17 = core_17_1;
            }
        ],
        execute: function () {
            exports_22("AboutUsComponent", AboutUsComponent = (() => {
                let _classDecorators_16 = [core_17.Component({
                        selector: 'app-about-us',
                        templateUrl: './about-us.component.html',
                        styleUrls: ['./about-us.component.css']
                    })];
                let _classDescriptor_16;
                let _classExtraInitializers_16 = [];
                let _classThis_16;
                var AboutUsComponent = _classThis_16 = class {
                };
                __setFunctionName(_classThis_16, "AboutUsComponent");
                (() => {
                    __esDecorate(null, _classDescriptor_16 = { value: _classThis_16 }, _classDecorators_16, { kind: "class", name: _classThis_16.name }, null, _classExtraInitializers_16);
                    AboutUsComponent = _classThis_16 = _classDescriptor_16.value;
                    __runInitializers(_classThis_16, _classExtraInitializers_16);
                })();
                return AboutUsComponent = _classThis_16;
            })());
        }
    };
});
System.register("app/header/header.component", ["@angular/core"], function (exports_23, context_23) {
    "use strict";
    var core_18, HeaderComponent;
    var __moduleName = context_23 && context_23.id;
    return {
        setters: [
            function (core_18_1) {
                core_18 = core_18_1;
            }
        ],
        execute: function () {
            exports_23("HeaderComponent", HeaderComponent = (() => {
                let _classDecorators_17 = [core_18.Component({
                        selector: 'app-header',
                        templateUrl: './header.component.html',
                        styleUrls: ['./header.component.css']
                    })];
                let _classDescriptor_17;
                let _classExtraInitializers_17 = [];
                let _classThis_17;
                var HeaderComponent = _classThis_17 = class {
                };
                __setFunctionName(_classThis_17, "HeaderComponent");
                (() => {
                    __esDecorate(null, _classDescriptor_17 = { value: _classThis_17 }, _classDecorators_17, { kind: "class", name: _classThis_17.name }, null, _classExtraInitializers_17);
                    HeaderComponent = _classThis_17 = _classDescriptor_17.value;
                    __runInitializers(_classThis_17, _classExtraInitializers_17);
                })();
                return HeaderComponent = _classThis_17;
            })());
        }
    };
});
System.register("app/app.module", ["@angular/core", "@angular/platform-browser", "@angular/common/http", "@angular/forms", "app/app-routing.module", "app/app.component", "@angular/platform-browser/animations", "@angular/material/grid-list", "@angular/material/toolbar", "@angular/material/card", "@angular/material/icon", "@angular/material/button", "@angular/material/input", "@angular/material/expansion", "@angular/material/core", "@angular/material/progress-bar", "@angular/cdk/layout", "@angular/material/sidenav", "@angular/material/list", "@angular/material/snack-bar", "@angular/material/select", "app/search/search.component", "app/homepage/homepage.component", "app/about-us/about-us.component", "app/not-found/not-found.component", "app/shopping-cart/shopping-cart.component", "app/gift-detail/gift-detail.component", "app/cookie-detail/cookie-detail.component", "app/brownie-detail/brownie-detail.component", "app/cake-detail/cake-detail.component", "app/header/header.component", "app/favorites/favorites.component"], function (exports_24, context_24) {
    "use strict";
    var core_19, platform_browser_1, http_1, forms_1, app_routing_module_1, app_component_1, animations_1, grid_list_1, toolbar_1, card_1, icon_1, button_1, input_1, expansion_1, core_20, progress_bar_1, layout_1, sidenav_1, list_1, snack_bar_1, select_1, search_component_1, homepage_component_2, about_us_component_1, not_found_component_2, shopping_cart_component_2, gift_detail_component_2, cookie_detail_component_2, brownie_detail_component_2, cake_detail_component_2, header_component_1, favorites_component_2, AppModule;
    var __moduleName = context_24 && context_24.id;
    return {
        setters: [
            function (core_19_1) {
                core_19 = core_19_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (app_routing_module_1_1) {
                app_routing_module_1 = app_routing_module_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (animations_1_1) {
                animations_1 = animations_1_1;
            },
            function (grid_list_1_1) {
                grid_list_1 = grid_list_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (icon_1_1) {
                icon_1 = icon_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (input_1_1) {
                input_1 = input_1_1;
            },
            function (expansion_1_1) {
                expansion_1 = expansion_1_1;
            },
            function (core_20_1) {
                core_20 = core_20_1;
            },
            function (progress_bar_1_1) {
                progress_bar_1 = progress_bar_1_1;
            },
            function (layout_1_1) {
                layout_1 = layout_1_1;
            },
            function (sidenav_1_1) {
                sidenav_1 = sidenav_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (snack_bar_1_1) {
                snack_bar_1 = snack_bar_1_1;
            },
            function (select_1_1) {
                select_1 = select_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            },
            function (homepage_component_2_1) {
                homepage_component_2 = homepage_component_2_1;
            },
            function (about_us_component_1_1) {
                about_us_component_1 = about_us_component_1_1;
            },
            function (not_found_component_2_1) {
                not_found_component_2 = not_found_component_2_1;
            },
            function (shopping_cart_component_2_1) {
                shopping_cart_component_2 = shopping_cart_component_2_1;
            },
            function (gift_detail_component_2_1) {
                gift_detail_component_2 = gift_detail_component_2_1;
            },
            function (cookie_detail_component_2_1) {
                cookie_detail_component_2 = cookie_detail_component_2_1;
            },
            function (brownie_detail_component_2_1) {
                brownie_detail_component_2 = brownie_detail_component_2_1;
            },
            function (cake_detail_component_2_1) {
                cake_detail_component_2 = cake_detail_component_2_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (favorites_component_2_1) {
                favorites_component_2 = favorites_component_2_1;
            }
        ],
        execute: function () {
            exports_24("AppModule", AppModule = (() => {
                let _classDecorators_18 = [core_19.NgModule({
                        declarations: [
                            app_component_1.AppComponent,
                            search_component_1.SearchComponent,
                            homepage_component_2.HomepageComponent,
                            about_us_component_1.AboutUsComponent,
                            not_found_component_2.NotFoundComponent,
                            shopping_cart_component_2.ShoppingCartComponent,
                            gift_detail_component_2.GiftDetailComponent,
                            cookie_detail_component_2.CookieDetailComponent,
                            brownie_detail_component_2.BrownieDetailComponent,
                            cake_detail_component_2.CakeDetailComponent,
                            header_component_1.HeaderComponent,
                            favorites_component_2.FavoritesComponent,
                        ],
                        imports: [
                            platform_browser_1.BrowserModule,
                            app_routing_module_1.AppRoutingModule,
                            animations_1.BrowserAnimationsModule,
                            http_1.HttpClientModule,
                            forms_1.FormsModule,
                            toolbar_1.MatToolbarModule,
                            card_1.MatCardModule,
                            icon_1.MatIconModule,
                            button_1.MatButtonModule,
                            input_1.MatInputModule,
                            grid_list_1.MatGridListModule,
                            expansion_1.MatExpansionModule,
                            core_20.MatRippleModule,
                            layout_1.LayoutModule,
                            sidenav_1.MatSidenavModule,
                            list_1.MatListModule,
                            snack_bar_1.MatSnackBarModule,
                            select_1.MatSelectModule,
                            progress_bar_1.MatProgressBarModule,
                            app_routing_module_1.AppRoutingModule
                        ],
                        providers: [],
                        bootstrap: [app_component_1.AppComponent]
                    })];
                let _classDescriptor_18;
                let _classExtraInitializers_18 = [];
                let _classThis_18;
                var AppModule = _classThis_18 = class {
                };
                __setFunctionName(_classThis_18, "AppModule");
                (() => {
                    __esDecorate(null, _classDescriptor_18 = { value: _classThis_18 }, _classDecorators_18, { kind: "class", name: _classThis_18.name }, null, _classExtraInitializers_18);
                    AppModule = _classThis_18 = _classDescriptor_18.value;
                    __runInitializers(_classThis_18, _classExtraInitializers_18);
                })();
                return AppModule = _classThis_18;
            })());
        }
    };
});
System.register("main", ["@angular/platform-browser-dynamic", "app/app.module"], function (exports_25, context_25) {
    "use strict";
    var platform_browser_dynamic_1, app_module_1;
    var __moduleName = context_25 && context_25.id;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }
        ],
        execute: function () {
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
                .catch(err => console.error(err));
        }
    };
});
