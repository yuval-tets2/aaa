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
import { PlanWhereInput } from "./PlanWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PlanListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PlanWhereInput,
  })
  @ValidateNested()
  @Type(() => PlanWhereInput)
  @IsOptional()
  @Field(() => PlanWhereInput, {
    nullable: true,
  })
  every?: PlanWhereInput;

  @ApiProperty({
    required: false,
    type: () => PlanWhereInput,
  })
  @ValidateNested()
  @Type(() => PlanWhereInput)
  @IsOptional()
  @Field(() => PlanWhereInput, {
    nullable: true,
  })
  some?: PlanWhereInput;

  @ApiProperty({
    required: false,
    type: () => PlanWhereInput,
  })
  @ValidateNested()
  @Type(() => PlanWhereInput)
  @IsOptional()
  @Field(() => PlanWhereInput, {
    nullable: true,
  })
  none?: PlanWhereInput;
}
export { PlanListRelationFilter as PlanListRelationFilter };
