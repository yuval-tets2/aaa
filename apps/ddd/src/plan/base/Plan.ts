/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsEnum,
  IsInt,
  IsString,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumPlanEndSemester } from "./EnumPlanEndSemester";
import { DegreeRequirement } from "../../degreeRequirement/base/DegreeRequirement";
import { Semester } from "../../semester/base/Semester";
import { EnumPlanStartSemester } from "./EnumPlanStartSemester";
import { User } from "../../user/base/User";

@ObjectType()
class Plan {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    enum: EnumPlanEndSemester,
  })
  @IsEnum(EnumPlanEndSemester)
  @Field(() => EnumPlanEndSemester, {
    nullable: true,
  })
  endSemester?: "f" | "s" | "u";

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
  id!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => DegreeRequirement,
  })
  @ValidateNested()
  @Type(() => DegreeRequirement)
  @IsOptional()
  requirements?: DegreeRequirement | null;

  @ApiProperty({
    required: false,
    type: () => [Semester],
  })
  @ValidateNested()
  @Type(() => Semester)
  @IsOptional()
  semesters?: Array<Semester>;

  @ApiProperty({
    required: true,
    enum: EnumPlanStartSemester,
  })
  @IsEnum(EnumPlanStartSemester)
  @Field(() => EnumPlanStartSemester, {
    nullable: true,
  })
  startSemester?: "f" | "s" | "u";

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
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  user?: User;
}

export { Plan as Plan };