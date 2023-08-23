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
  ValidateNested,
  IsBoolean,
  IsEnum,
  IsInt,
} from "class-validator";
import { CourseUpdateManyWithoutSemestersInput } from "./CourseUpdateManyWithoutSemestersInput";
import { Type } from "class-transformer";
import { PlanWhereUniqueInput } from "../../plan/base/PlanWhereUniqueInput";
import { EnumSemesterSemester } from "./EnumSemesterSemester";

@InputType()
class SemesterUpdateInput {
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
    type: () => CourseUpdateManyWithoutSemestersInput,
  })
  @ValidateNested()
  @Type(() => CourseUpdateManyWithoutSemestersInput)
  @IsOptional()
  @Field(() => CourseUpdateManyWithoutSemestersInput, {
    nullable: true,
  })
  courses?: CourseUpdateManyWithoutSemestersInput;

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
    type: () => PlanWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PlanWhereUniqueInput)
  @IsOptional()
  @Field(() => PlanWhereUniqueInput, {
    nullable: true,
  })
  plan?: PlanWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumSemesterSemester,
  })
  @IsEnum(EnumSemesterSemester)
  @IsOptional()
  @Field(() => EnumSemesterSemester, {
    nullable: true,
  })
  semester?: "f" | "s" | "u";

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  year?: number;
}

export { SemesterUpdateInput as SemesterUpdateInput };
