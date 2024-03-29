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
import { SurveyWhereInput } from "./SurveyWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SurveyOrderByInput } from "./SurveyOrderByInput";

@ArgsType()
class SurveyFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SurveyWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SurveyWhereInput, { nullable: true })
  @Type(() => SurveyWhereInput)
  where?: SurveyWhereInput;

  @ApiProperty({
    required: false,
    type: [SurveyOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SurveyOrderByInput], { nullable: true })
  @Type(() => SurveyOrderByInput)
  orderBy?: Array<SurveyOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SurveyFindManyArgs as SurveyFindManyArgs };
