import { MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";
import { AuthorInput } from "./author-params";

@InputType()
export class CreateBookInput {
    @Field()
    @MaxLength(10)
    name: string;

    @Field({ nullable: true })
    createdOn?: string;
    
    @Field()
    page: string;
}


@InputType()
export class EditBookInput {
    @Field({ nullable: true })
    @MaxLength(10)
    name?: string;

    @Field({ nullable: true })
    createdOn?: string;

    @Field({ nullable: true })
    page?: number;

    @Field(type => [AuthorInput])
    authors?: AuthorInput[]
}