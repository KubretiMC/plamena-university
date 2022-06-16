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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorResolver = void 0;
const type_graphql_1 = require("type-graphql");
const author_entity_1 = require("../entities/author-entity");
const author_params_1 = require("./author-params");
let AuthorResolver = class AuthorResolver {
    async authors() {
        return await author_entity_1.AuthorModel.find({});
    }
    async author(_id) {
        return await author_entity_1.AuthorModel.findById(_id);
    }
    async createAuthor(data) {
        const newAuthor = new author_entity_1.AuthorModel(data);
        await newAuthor.save();
        return newAuthor;
    }
    async deleteAuthor(_id) {
        const deltedAuthor = await author_entity_1.AuthorModel.findByIdAndRemove(_id);
        return deltedAuthor;
    }
    async editAuthor(_id, data) {
        return author_entity_1.AuthorModel.findByIdAndUpdate(_id, data, { new: true });
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => [author_entity_1.Author]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "authors", null);
__decorate([
    (0, type_graphql_1.Query)(returns => author_entity_1.Author),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "author", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => author_entity_1.Author),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authoer_params_1.CreateAuthorInput]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "createAuthor", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => author_entity_1.Author),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "deleteAuthor", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => author_entity_1.Author),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, author_params_1.BaseAuthorInput]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "editAuthor", null);
AuthorResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], AuthorResolver);
exports.AuthorResolver = AuthorResolver;
