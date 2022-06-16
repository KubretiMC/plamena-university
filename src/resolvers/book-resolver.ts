import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { Book, BookModel } from "../entities/book-entity";
import { CreateBookInput, EditBookInput } from "./book-params";

@Resolver()
export class BookResolver {

    @Query(returns => [Book])
    async books(): Promise<Book[]> {
        return await BookModel.find({});
    }

    @Query(returns => Book)
    async book(@Arg("_id") _id: string): Promise<Book[]> {
        return await BookModel.findById(_id);
    }

    @Mutation(returns => Book)
    async createBook(@Arg("data") data: CreateBookInput): Promise<Book> {
        const newBook = new BookModel(data);
        await newBook.save();
        return newBook;
    }

    @Mutation(returns => Book)
    async deleteBook(@Arg("_id") _id: string): Promise<Book> {
        const deletedBook = await BookModel.findByIdAndRemove(_id);
        return deletedBook;
    }

    @Mutation(returns => Book)
    async editBook(@Arg("_id") _id: string, @Arg("data") data: EditBookInput): Promise<Book> {

        return BookModel.findByIdAndUpdate(_id, data, { new: true });
    }
}