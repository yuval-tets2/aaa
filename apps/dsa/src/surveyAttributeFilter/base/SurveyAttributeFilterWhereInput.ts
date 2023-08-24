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
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { SurveyWhereUniqueInput } from "../../survey/base/SurveyWhereUniqueInput";

@InputType()
class SurveyAttributeFilterWhereInput {
  @ApiProperty({
    required: false,
    type: () => AttributeClassWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AttributeClassWhereUniqueInput)
  @IsOptional()
  @Field(() => AttributeClassWhereUniqueInput, {
    nullable: true,
  })
  attributeClass?: AttributeClassWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => SurveyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SurveyWhereUniqueInput)
  @IsOptional()
  @Field(() => SurveyWhereUniqueInput, {
    nullable: true,
  })
  survey?: SurveyWhereUniqueInput;
}

export { SurveyAttributeFilterWhereInput as SurveyAttributeFilterWhereInput };
