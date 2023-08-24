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
import { PersonWhereUniqueInput } from "../../person/base/PersonWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumDisplayStatus } from "./EnumDisplayStatus";
import { SurveyWhereUniqueInput } from "../../survey/base/SurveyWhereUniqueInput";

@InputType()
class DisplayCreateInput {
  @ApiProperty({
    required: false,
    type: () => PersonWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PersonWhereUniqueInput)
  @IsOptional()
  @Field(() => PersonWhereUniqueInput, {
    nullable: true,
  })
  person?: PersonWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    enum: EnumDisplayStatus,
  })
  @IsEnum(EnumDisplayStatus)
  @Field(() => EnumDisplayStatus)
  status!: "seen" | "responded";

  @ApiProperty({
    required: true,
    type: () => SurveyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SurveyWhereUniqueInput)
  @Field(() => SurveyWhereUniqueInput)
  survey!: SurveyWhereUniqueInput;
}

export { DisplayCreateInput as DisplayCreateInput };
