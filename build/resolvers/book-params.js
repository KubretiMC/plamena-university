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
exports.EditBookInput = exports.CreateBookInput = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
const author_params_1 = require("./author-params");
let CreateBookInput = class CreateBookInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(10),
    __metadata("design:type", String)
], CreateBookInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateBookInput.prototype, "createdOn", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateBookInput.prototype, "page", void 0);
CreateBookInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateBookInput);
exports.CreateBookInput = CreateBookInput;
let EditBookInput = class EditBookInput {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(10),
    __metadata("design:type", String)
], EditBookInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], EditBookInput.prototype, "createdOn", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], EditBookInput.prototype, "page", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [author_params_1.AuthorInput]),
    __metadata("design:type", Array)
], EditBookInput.prototype, "authors", void 0);
EditBookInput = __decorate([
    (0, type_graphql_1.InputType)()
], EditBookInput);
exports.EditBookInput = EditBookInput;
