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
import { Attribute } from "../../attribute/base/Attribute";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Display } from "../../display/base/Display";
import { Environment } from "../../environment/base/Environment";
import { Response } from "../../response/base/Response";
import { Session } from "../../session/base/Session";

@ObjectType()
class Person {
  @ApiProperty({
    required: false,
    type: () => [Attribute],
  })
  @ValidateNested()
  @Type(() => Attribute)
  @IsOptional()
  attributes?: Array<Attribute>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [Display],
  })
  @ValidateNested()
  @Type(() => Display)
  @IsOptional()
  displays?: Array<Display>;

  @ApiProperty({
    required: true,
    type: () => Environment,
  })
  @ValidateNested()
  @Type(() => Environment)
  environment?: Environment;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Response],
  })
  @ValidateNested()
  @Type(() => Response)
  @IsOptional()
  responses?: Array<Response>;

  @ApiProperty({
    required: false,
    type: () => [Session],
  })
  @ValidateNested()
  @Type(() => Session)
  @IsOptional()
  sessions?: Array<Session>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Person as Person };
