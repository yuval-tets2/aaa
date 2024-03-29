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
import { EnumPlanEndSemester } from "./EnumPlanEndSemester";
import {
  IsEnum,
  IsOptional,
  IsInt,
  IsString,
  ValidateNested,
} from "class-validator";
import { DegreeRequirementWhereUniqueInput } from "../../degreeRequirement/base/DegreeRequirementWhereUniqueInput";
import { Type } from "class-transformer";
import { SemesterUpdateManyWithoutPlansInput } from "./SemesterUpdateManyWithoutPlansInput";
import { EnumPlanStartSemester } from "./EnumPlanStartSemester";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class PlanUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumPlanEndSemester,
  })
  @IsEnum(EnumPlanEndSemester)
  @IsOptional()
  @Field(() => EnumPlanEndSemester, {
    nullable: true,
  })
  endSemester?: "f" | "s" | "u";

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  endYear?: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => DegreeRequirementWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DegreeRequirementWhereUniqueInput)
  @IsOptional()
  @Field(() => DegreeRequirementWhereUniqueInput, {
    nullable: true,
  })
  requirements?: DegreeRequirementWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SemesterUpdateManyWithoutPlansInput,
  })
  @ValidateNested()
  @Type(() => SemesterUpdateManyWithoutPlansInput)
  @IsOptional()
  @Field(() => SemesterUpdateManyWithoutPlansInput, {
    nullable: true,
  })
  semesters?: SemesterUpdateManyWithoutPlansInput;

  @ApiProperty({
    required: false,
    enum: EnumPlanStartSemester,
  })
  @IsEnum(EnumPlanStartSemester)
  @IsOptional()
  @Field(() => EnumPlanStartSemester, {
    nullable: true,
  })
  startSemester?: "f" | "s" | "u";

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  startYear?: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  transferCredits?: string;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}

export { PlanUpdateInput as PlanUpdateInput };
