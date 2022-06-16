import { buildSchema } from "type-graphql";
import { BookResolver } from "./resolvers/book-resolver";
import { TypegooseMiddleware } from "./typegoose-midleware";
import * as path from "path";
import { ObjectId } from "mongodb";
import { ObjectIdScalar } from "./object-id.scalar";
import { AuthorResolver } from "./resolvers/author-resolver";

export const getSchema = async () => {

    const schema = await buildSchema({
        resolvers: [BookResolver, AuthorResolver],
        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
        // use document converting middleware
        globalMiddlewares: [TypegooseMiddleware],
        // use ObjectId scalar mapping
        scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
    });
    return schema;
}
