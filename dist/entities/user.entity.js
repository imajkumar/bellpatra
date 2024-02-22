"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.RoleEnumType = void 0;
const crypto_1 = __importDefault(require("crypto"));
const typeorm_1 = require("typeorm");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const model_entity_1 = __importDefault(require("./model.entity"));
var RoleEnumType;
(function (RoleEnumType) {
    RoleEnumType["USER"] = "user";
    RoleEnumType["ADMIN"] = "admin";
})(RoleEnumType || (exports.RoleEnumType = RoleEnumType = {}));
let User = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)('users')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = model_entity_1.default;
    let _instanceExtraInitializers = [];
    let _name_decorators;
    let _name_initializers = [];
    let _email_decorators;
    let _email_initializers = [];
    let _password_decorators;
    let _password_initializers = [];
    let _age_decorators;
    let _age_initializers = [];
    let _phone_decorators;
    let _phone_initializers = [];
    let _passwordConfirm_decorators;
    let _passwordConfirm_initializers = [];
    let _role_decorators;
    let _role_initializers = [];
    let _photo_decorators;
    let _photo_initializers = [];
    let _avatar_decorators;
    let _avatar_initializers = [];
    let _verified_decorators;
    let _verified_initializers = [];
    let _verificationCode_decorators;
    let _verificationCode_initializers = [];
    let _hashPassword_decorators;
    var User = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.name = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.email = __runInitializers(this, _email_initializers, void 0);
            this.password = __runInitializers(this, _password_initializers, void 0);
            this.age = __runInitializers(this, _age_initializers, void 0);
            this.phone = __runInitializers(this, _phone_initializers, void 0);
            this.passwordConfirm = __runInitializers(this, _passwordConfirm_initializers, void 0);
            this.role = __runInitializers(this, _role_initializers, void 0);
            this.photo = __runInitializers(this, _photo_initializers, void 0);
            this.avatar = __runInitializers(this, _avatar_initializers, void 0);
            this.verified = __runInitializers(this, _verified_initializers, void 0);
            this.verificationCode = __runInitializers(this, _verificationCode_initializers, void 0);
        }
        hashPassword() {
            return __awaiter(this, void 0, void 0, function* () {
                this.password = yield bcryptjs_1.default.hash(this.password, 12);
            });
        }
        static comparePasswords(candidatePassword, hashedPassword) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield bcryptjs_1.default.compare(candidatePassword, hashedPassword);
            });
        }
        static createVerificationCode() {
            const verificationCode = crypto_1.default.randomBytes(32).toString('hex');
            const hashedVerificationCode = crypto_1.default
                .createHash('sha256')
                .update(verificationCode)
                .digest('hex');
            return { verificationCode, hashedVerificationCode };
        }
        toJSON() {
            return Object.assign(Object.assign({}, this), { password: undefined, verified: undefined, verificationCode: undefined });
        }
    };
    __setFunctionName(_classThis, "User");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _name_decorators = [(0, typeorm_1.Column)()];
        _email_decorators = [(0, typeorm_1.Index)('email_index'), (0, typeorm_1.Column)({
                unique: true,
            })];
        _password_decorators = [(0, typeorm_1.Column)()];
        _age_decorators = [(0, typeorm_1.Column)({
                nullable: true
            })];
        _phone_decorators = [(0, typeorm_1.Column)({
                nullable: true
            })];
        _passwordConfirm_decorators = [(0, typeorm_1.Column)({
                default: 'default.png',
            })];
        _role_decorators = [(0, typeorm_1.Column)({
                type: 'enum',
                enum: RoleEnumType,
                default: RoleEnumType.USER,
            })];
        _photo_decorators = [(0, typeorm_1.Column)({
                default: 'default.png',
            })];
        _avatar_decorators = [(0, typeorm_1.Column)({
                default: 'default.png',
            })];
        _verified_decorators = [(0, typeorm_1.Column)({
                default: false,
            })];
        _verificationCode_decorators = [(0, typeorm_1.Index)('verificationCode_index'), (0, typeorm_1.Column)({
                type: 'text',
                nullable: true,
            })];
        _hashPassword_decorators = [(0, typeorm_1.BeforeInsert)()];
        __esDecorate(_classThis, null, _hashPassword_decorators, { kind: "method", name: "hashPassword", static: false, private: false, access: { has: obj => "hashPassword" in obj, get: obj => obj.hashPassword }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } }, metadata: _metadata }, _email_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: obj => "password" in obj, get: obj => obj.password, set: (obj, value) => { obj.password = value; } }, metadata: _metadata }, _password_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _age_decorators, { kind: "field", name: "age", static: false, private: false, access: { has: obj => "age" in obj, get: obj => obj.age, set: (obj, value) => { obj.age = value; } }, metadata: _metadata }, _age_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: obj => "phone" in obj, get: obj => obj.phone, set: (obj, value) => { obj.phone = value; } }, metadata: _metadata }, _phone_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _passwordConfirm_decorators, { kind: "field", name: "passwordConfirm", static: false, private: false, access: { has: obj => "passwordConfirm" in obj, get: obj => obj.passwordConfirm, set: (obj, value) => { obj.passwordConfirm = value; } }, metadata: _metadata }, _passwordConfirm_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: obj => "role" in obj, get: obj => obj.role, set: (obj, value) => { obj.role = value; } }, metadata: _metadata }, _role_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _photo_decorators, { kind: "field", name: "photo", static: false, private: false, access: { has: obj => "photo" in obj, get: obj => obj.photo, set: (obj, value) => { obj.photo = value; } }, metadata: _metadata }, _photo_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _avatar_decorators, { kind: "field", name: "avatar", static: false, private: false, access: { has: obj => "avatar" in obj, get: obj => obj.avatar, set: (obj, value) => { obj.avatar = value; } }, metadata: _metadata }, _avatar_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _verified_decorators, { kind: "field", name: "verified", static: false, private: false, access: { has: obj => "verified" in obj, get: obj => obj.verified, set: (obj, value) => { obj.verified = value; } }, metadata: _metadata }, _verified_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _verificationCode_decorators, { kind: "field", name: "verificationCode", static: false, private: false, access: { has: obj => "verificationCode" in obj, get: obj => obj.verificationCode, set: (obj, value) => { obj.verificationCode = value; } }, metadata: _metadata }, _verificationCode_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
})();
exports.User = User;
