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
import { AttributeClassWhereUniqueInput } from "../../attributeClass/base/AttributeClassWhereUniqueInput";
import { ValidateNested, IsString } from "class-validator";
import { Type } from "class-transformer";
import { PersonWhereUniqueInput } from "../../person/base/PersonWhereUniqueInput";

@InputType()
class AttributeCreateInput {
  @ApiProperty({
    required: true,
    type: () => AttributeClassWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AttributeClassWhereUniqueInput)
  @Field(() => AttributeClassWhereUniqueInput)
  attributeClass!: AttributeClassWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PersonWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PersonWhereUniqueInput)
  @Field(() => PersonWhereUniqueInput)
  person!: PersonWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  value!: string;
}

export { AttributeCreateInput as AttributeCreateInput };
