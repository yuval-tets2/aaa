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
import { EnvironmentWhereInput } from "./EnvironmentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EnvironmentOrderByInput } from "./EnvironmentOrderByInput";

@ArgsType()
class EnvironmentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EnvironmentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EnvironmentWhereInput, { nullable: true })
  @Type(() => EnvironmentWhereInput)
  where?: EnvironmentWhereInput;

  @ApiProperty({
    required: false,
    type: [EnvironmentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EnvironmentOrderByInput], { nullable: true })
  @Type(() => EnvironmentOrderByInput)
  orderBy?: Array<EnvironmentOrderByInput>;

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

export { EnvironmentFindManyArgs as EnvironmentFindManyArgs };
