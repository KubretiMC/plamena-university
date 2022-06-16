import { MaxLength } from "class-validator";
import { ObjectId } from "mongodb";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAuthorInput {


    @MaxLength(30)
    @Field()
    firstName: string;

    @MaxLength(30)
    @Field()
    lastName: string;

    @MaxLength(255)
    @Field()
    age: string;

    @MaxLength(20)
    @Field()
    country: string;
}


@InputType()
export class BaseAuthorInput {

    @MaxLength(30)
    @Field({ nullable: true })
    firstName?: string;

    @MaxLength(30)
    @Field({ nullable: true })
    lastName?: string;

    @MaxLength(255)
    @Field({ nullable: true })
    age?: string;

    @MaxLength(20)
    @Field({ nullable: true })
    country?: string;
}

@InputType()
export class AuthorInput extends BaseAuthorInput {
    @Field()
    _id: ObjectId;
}