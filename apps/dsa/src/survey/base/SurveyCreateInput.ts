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
import { SurveyAttributeFilterCreateNestedManyWithoutSurveysInput } from "./SurveyAttributeFilterCreateNestedManyWithoutSurveysInput";
import {
  ValidateNested,
  IsOptional,
  IsInt,
  IsDate,
  IsEnum,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumSurveyDisplayOption } from "./EnumSurveyDisplayOption";
import { DisplayCreateNestedManyWithoutSurveysInput } from "./DisplayCreateNestedManyWithoutSurveysInput";
import { EnvironmentWhereUniqueInput } from "../../environment/base/EnvironmentWhereUniqueInput";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { ResponseCreateNestedManyWithoutSurveysInput } from "./ResponseCreateNestedManyWithoutSurveysInput";
import { EnumSurveyStatus } from "./EnumSurveyStatus";
import { SurveyTriggerCreateNestedManyWithoutSurveysInput } from "./SurveyTriggerCreateNestedManyWithoutSurveysInput";
import { EnumSurveyType } from "./EnumSurveyType";

@InputType()
class SurveyCreateInput {
  @ApiProperty({
    required: false,
    type: () => SurveyAttributeFilterCreateNestedManyWithoutSurveysInput,
  })
  @ValidateNested()
  @Type(() => SurveyAttributeFilterCreateNestedManyWithoutSurveysInput)
  @IsOptional()
  @Field(() => SurveyAttributeFilterCreateNestedManyWithoutSurveysInput, {
    nullable: true,
  })
  attributeFilters?: SurveyAttributeFilterCreateNestedManyWithoutSurveysInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  autoClose?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  autoComplete?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  closeOnDate?: Date | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  delay!: number;

  @ApiProperty({
    required: true,
    enum: EnumSurveyDisplayOption,
  })
  @IsEnum(EnumSurveyDisplayOption)
  @Field(() => EnumSurveyDisplayOption)
  displayOption!: "displayOnce" | "displayMultiple" | "respondMultiple";

  @ApiProperty({
    required: false,
    type: () => DisplayCreateNestedManyWithoutSurveysInput,
  })
  @ValidateNested()
  @Type(() => DisplayCreateNestedManyWithoutSurveysInput)
  @IsOptional()
  @Field(() => DisplayCreateNestedManyWithoutSurveysInput, {
    nullable: true,
  })
  displays?: DisplayCreateNestedManyWithoutSurveysInput;

  @ApiProperty({
    required: true,
    type: () => EnvironmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EnvironmentWhereUniqueInput)
  @Field(() => EnvironmentWhereUniqueInput)
  environment!: EnvironmentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  questions!: InputJsonValue;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  recontactDays?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  redirectUrl?: string | null;

  @ApiProperty({
    required: false,
    type: () => ResponseCreateNestedManyWithoutSurveysInput,
  })
  @ValidateNested()
  @Type(() => ResponseCreateNestedManyWithoutSurveysInput)
  @IsOptional()
  @Field(() => ResponseCreateNestedManyWithoutSurveysInput, {
    nullable: true,
  })
  responses?: ResponseCreateNestedManyWithoutSurveysInput;

  @ApiProperty({
    required: true,
    enum: EnumSurveyStatus,
  })
  @IsEnum(EnumSurveyStatus)
  @Field(() => EnumSurveyStatus)
  status!: "draft" | "inProgress" | "paused" | "completed" | "archived";

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  surveyClosedMessage?: InputJsonValue;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  thankYouCard!: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => SurveyTriggerCreateNestedManyWithoutSurveysInput,
  })
  @ValidateNested()
  @Type(() => SurveyTriggerCreateNestedManyWithoutSurveysInput)
  @IsOptional()
  @Field(() => SurveyTriggerCreateNestedManyWithoutSurveysInput, {
    nullable: true,
  })
  triggers?: SurveyTriggerCreateNestedManyWithoutSurveysInput;

  @ApiProperty({
    required: true,
    enum: EnumSurveyType,
  })
  @IsEnum(EnumSurveyType)
  @Field(() => EnumSurveyType)
  type!: "email" | "link" | "mobile" | "web";
}

export { SurveyCreateInput as SurveyCreateInput };
