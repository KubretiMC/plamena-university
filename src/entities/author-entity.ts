import { ObjectType, Field } from "type-graphql";
import { getModelForClass, prop as Prop } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

@ObjectType()
export class Author {
    @Field()
    readonly _id: ObjectId;

    @Prop({ required: true })
    @Field()
    firstName: string;

    @Prop({ required: true })
    @Field()
    lastName: string;

    @Prop({ required: true })
    @Field()
    age: string;

    @Prop({ required: true })
    @Field()
    country: string;
}

export const AuthorModel = getModelForClass(Author, { schemaOptions: { timestamps: true } });