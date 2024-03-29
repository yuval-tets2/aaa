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
import { ValidateNested, IsEnum, IsString } from "class-validator";
import { Type } from "class-transformer";
import { EnumSurveyAttributeFilterCondition } from "./EnumSurveyAttributeFilterCondition";
import { SurveyWhereUniqueInput } from "../../survey/base/SurveyWhereUniqueInput";

@InputType()
class SurveyAttributeFilterCreateInput {
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
    enum: EnumSurveyAttributeFilterCondition,
  })
  @IsEnum(EnumSurveyAttributeFilterCondition)
  @Field(() => EnumSurveyAttributeFilterCondition)
  condition!: "equals" | "notEquals";

  @ApiProperty({
    required: true,
    type: () => SurveyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SurveyWhereUniqueInput)
  @Field(() => SurveyWhereUniqueInput)
  survey!: SurveyWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  value!: string;
}

export { SurveyAttributeFilterCreateInput as SurveyAttributeFilterCreateInput };
