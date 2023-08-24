/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AttributeCreateNestedManyWithoutPeopleInput } from "./AttributeCreateNestedManyWithoutPeopleInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { DisplayCreateNestedManyWithoutPeopleInput } from "./DisplayCreateNestedManyWithoutPeopleInput";
import { EnvironmentWhereUniqueInput } from "../../environment/base/EnvironmentWhereUniqueInput";
import { ResponseCreateNestedManyWithoutPeopleInput } from "./ResponseCreateNestedManyWithoutPeopleInput";
import { SessionCreateNestedManyWithoutPeopleInput } from "./SessionCreateNestedManyWithoutPeopleInput";

@InputType()
class PersonCreateInput {
  @ApiProperty({
    required: false,
    type: () => AttributeCreateNestedManyWithoutPeopleInput,
  })
  @ValidateNested()
  @Type(() => AttributeCreateNestedManyWithoutPeopleInput)
  @IsOptional()
  @Field(() => AttributeCreateNestedManyWithoutPeopleInput, {
    nullable: true,
  })
  attributes?: AttributeCreateNestedManyWithoutPeopleInput;

  @ApiProperty({
    required: false,
    type: () => DisplayCreateNestedManyWithoutPeopleInput,
  })
  @ValidateNested()
  @Type(() => DisplayCreateNestedManyWithoutPeopleInput)
  @IsOptional()
  @Field(() => DisplayCreateNestedManyWithoutPeopleInput, {
    nullable: true,
  })
  displays?: DisplayCreateNestedManyWithoutPeopleInput;

  @ApiProperty({
    required: true,
    type: () => EnvironmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EnvironmentWhereUniqueInput)
  @Field(() => EnvironmentWhereUniqueInput)
  environment!: EnvironmentWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ResponseCreateNestedManyWithoutPeopleInput,
  })
  @ValidateNested()
  @Type(() => ResponseCreateNestedManyWithoutPeopleInput)
  @IsOptional()
  @Field(() => ResponseCreateNestedManyWithoutPeopleInput, {
    nullable: true,
  })
  responses?: ResponseCreateNestedManyWithoutPeopleInput;

  @ApiProperty({
    required: false,
    type: () => SessionCreateNestedManyWithoutPeopleInput,
  })
  @ValidateNested()
  @Type(() => SessionCreateNestedManyWithoutPeopleInput)
  @IsOptional()
  @Field(() => SessionCreateNestedManyWithoutPeopleInput, {
    nullable: true,
  })
  sessions?: SessionCreateNestedManyWithoutPeopleInput;
}

export { PersonCreateInput as PersonCreateInput };
