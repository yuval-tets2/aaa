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
  IsInt,
  IsString,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { DegreeRequirementWhereUniqueInput } from "../../degreeRequirement/base/DegreeRequirementWhereUniqueInput";
import { Type } from "class-transformer";
import { SemesterCreateNestedManyWithoutPlansInput } from "./SemesterCreateNestedManyWithoutPlansInput";
import { EnumPlanStartSemester } from "./EnumPlanStartSemester";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class PlanCreateInput {
  @ApiProperty({
    required: true,
    enum: EnumPlanEndSemester,
  })
  @IsEnum(EnumPlanEndSemester)
  @Field(() => EnumPlanEndSemester)
  endSemester!: "f" | "s" | "u";

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  endYear!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

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
    type: () => SemesterCreateNestedManyWithoutPlansInput,
  })
  @ValidateNested()
  @Type(() => SemesterCreateNestedManyWithoutPlansInput)
  @IsOptional()
  @Field(() => SemesterCreateNestedManyWithoutPlansInput, {
    nullable: true,
  })
  semesters?: SemesterCreateNestedManyWithoutPlansInput;

  @ApiProperty({
    required: true,
    enum: EnumPlanStartSemester,
  })
  @IsEnum(EnumPlanStartSemester)
  @Field(() => EnumPlanStartSemester)
  startSemester!: "f" | "s" | "u";

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  startYear!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  transferCredits!: string;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  user!: UserWhereUniqueInput;
}

export { PlanCreateInput as PlanCreateInput };
