import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { Author, AuthorModel } from "../entities/author-entity";
import { CreateAuthorInput, BaseAuthorInput } from "./author-params";

@Resolver()
export class AuthorResolver {

    @Query(returns => [Author])
    async authors(): Promise<Author[]> {
        return await AuthorModel.find({});
    }

    @Query(returns => Author)
    async author(@Arg("_id") _id: string): Promise<Author[]> {
        return await AuthorModel.findById(_id);
    }

    @Mutation(returns => Author)
    async createAuthor(@Arg("data") data: CreateAuthorInput): Promise<Author> {
        const newAuthor = new AuthorModel(data);
        await newAuthor.save();
        return newAuthor;
    }

    @Mutation(returns => Author)
    async deleteAuthor(@Arg("_id") _id: string): Promise<Author> {
        const deletedAuthor = await AuthorModel.findByIdAndRemove(_id);
        return deletedAuthor;
    }

    @Mutation(returns => Author)
    async editAuthor(@Arg("_id") _id: string, @Arg("data") data: BaseAuthorInput): Promise<Author> {

        return AuthorModel.findByIdAndUpdate(_id, data, { new: true });
    }
}