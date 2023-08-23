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
import {
  IsString,
  IsOptional,
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { SemesterWhereUniqueInput } from "../../semester/base/SemesterWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class CourseUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  code?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  color?: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  locked?: boolean;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  prereqOverriden?: boolean;

  @ApiProperty({
    required: false,
    type: () => SemesterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SemesterWhereUniqueInput)
  @IsOptional()
  @Field(() => SemesterWhereUniqueInput, {
    nullable: true,
  })
  semester?: SemesterWhereUniqueInput;
}

export { CourseUpdateInput as CourseUpdateInput };
