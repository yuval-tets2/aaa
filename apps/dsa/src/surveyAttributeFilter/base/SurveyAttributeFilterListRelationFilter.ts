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
import { SurveyAttributeFilterWhereInput } from "./SurveyAttributeFilterWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SurveyAttributeFilterListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SurveyAttributeFilterWhereInput,
  })
  @ValidateNested()
  @Type(() => SurveyAttributeFilterWhereInput)
  @IsOptional()
  @Field(() => SurveyAttributeFilterWhereInput, {
    nullable: true,
  })
  every?: SurveyAttributeFilterWhereInput;

  @ApiProperty({
    required: false,
    type: () => SurveyAttributeFilterWhereInput,
  })
  @ValidateNested()
  @Type(() => SurveyAttributeFilterWhereInput)
  @IsOptional()
  @Field(() => SurveyAttributeFilterWhereInput, {
    nullable: true,
  })
  some?: SurveyAttributeFilterWhereInput;

  @ApiProperty({
    required: false,
    type: () => SurveyAttributeFilterWhereInput,
  })
  @ValidateNested()
  @Type(() => SurveyAttributeFilterWhereInput)
  @IsOptional()
  @Field(() => SurveyAttributeFilterWhereInput, {
    nullable: true,
  })
  none?: SurveyAttributeFilterWhereInput;
}
export { SurveyAttributeFilterListRelationFilter as SurveyAttributeFilterListRelationFilter };
