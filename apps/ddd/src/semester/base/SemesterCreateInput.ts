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
  ValidateNested,
  IsOptional,
  IsBoolean,
  IsEnum,
  IsInt,
} from "class-validator";
import { CourseCreateNestedManyWithoutSemestersInput } from "./CourseCreateNestedManyWithoutSemestersInput";
import { Type } from "class-transformer";
import { PlanWhereUniqueInput } from "../../plan/base/PlanWhereUniqueInput";
import { EnumSemesterSemester } from "./EnumSemesterSemester";

@InputType()
class SemesterCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  color!: string;

  @ApiProperty({
    required: false,
    type: () => CourseCreateNestedManyWithoutSemestersInput,
  })
  @ValidateNested()
  @Type(() => CourseCreateNestedManyWithoutSemestersInput)
  @IsOptional()
  @Field(() => CourseCreateNestedManyWithoutSemestersInput, {
    nullable: true,
  })
  courses?: CourseCreateNestedManyWithoutSemestersInput;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  locked!: boolean;

  @ApiProperty({
    required: true,
    type: () => PlanWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PlanWhereUniqueInput)
  @Field(() => PlanWhereUniqueInput)
  plan!: PlanWhereUniqueInput;

  @ApiProperty({
    required: true,
    enum: EnumSemesterSemester,
  })
  @IsEnum(EnumSemesterSemester)
  @Field(() => EnumSemesterSemester)
  semester!: "f" | "s" | "u";

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  year!: number;
}

export { SemesterCreateInput as SemesterCreateInput };
