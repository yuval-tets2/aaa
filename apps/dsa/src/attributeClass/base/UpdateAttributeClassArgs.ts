/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AttributeClassWhereUniqueInput } from "./AttributeClassWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AttributeClassUpdateInput } from "./AttributeClassUpdateInput";

@ArgsType()
class UpdateAttributeClassArgs {
  @ApiProperty({
    required: true,
    type: () => AttributeClassWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AttributeClassWhereUniqueInput)
  @Field(() => AttributeClassWhereUniqueInput, { nullable: false })
  where!: AttributeClassWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AttributeClassUpdateInput,
  })
  @ValidateNested()
  @Type(() => AttributeClassUpdateInput)
  @Field(() => AttributeClassUpdateInput, { nullable: false })
  data!: AttributeClassUpdateInput;
}

export { UpdateAttributeClassArgs as UpdateAttributeClassArgs };
