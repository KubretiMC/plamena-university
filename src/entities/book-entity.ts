import { ObjectType, Field } from "type-graphql";
import { prop as Prop, getModelForClass, modelOptions, Severity } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Author } from "./author-entity";


@modelOptions({ options: { allowMixed: Severity.ALLOW } })

@ObjectType()
export class Book {


    @Field()
    readonly _id: ObjectId;

    @Prop({ required: true, default: new Date() })
    @Field()
    createdOn: Date;

    @Prop({ required: true })
    @Field()
    name: string;

    @Prop({ required: true })
    @Field()
    page: string;

    @Field(type => [Author])
    @Prop({ default: [] })
    authors?: Author[]
}

export const BookModel = getModelForClass(Book, { schemaOptions: { timestamps: true } });