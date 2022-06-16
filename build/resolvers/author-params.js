"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorInput = exports.BaseAuthorInput = exports.CreateAuthorInput = void 0;
const class_validator_1 = require("class-validator");
const mongodb_1 = require("mongodb");
const type_graphql_1 = require("type-graphql");
let CreateAuthorInput = class CreateAuthorInput {
};
__decorate([
    (0, class_validator_1.MaxLength)(30),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateAuthorInput.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(30),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateAuthorInput.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(255),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateAuthorInput.prototype, "age", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(20),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateAuthorInput.prototype, "country", void 0);
CreateAuthorInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateAuthorInput);
exports.CreateAuthorInput = CreateAuthorInput;
let BaseAuthorInput = class BaseAuthorInput {
};
__decorate([
    (0, class_validator_1.MaxLength)(30),
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], BaseAuthorInput.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(30),
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], BaseAuthorInput.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(255),
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], BaseAuthorInput.prototype, "age", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(20),
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], BaseAuthorInput.prototype, "country", void 0);
BaseAuthorInput = __decorate([
    (0, type_graphql_1.InputType)()
], BaseAuthorInput);
exports.BaseAuthorInput = BaseAuthorInput;
let AuthorInput = class AuthorInput extends BaseAuthorInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongodb_1.ObjectId)
], AuthorInput.prototype, "_id", void 0);
AuthorInput = __decorate([
    (0, type_graphql_1.InputType)()
], AuthorInput);
exports.AuthorInput = AuthorInput;
