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
  IsString,
  ValidateNested,
  IsOptional,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Person } from "../../person/base/Person";
import { EnumDisplayStatus } from "./EnumDisplayStatus";
import { Survey } from "../../survey/base/Survey";

@ObjectType()
class Display {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Person,
  })
  @ValidateNested()
  @Type(() => Person)
  @IsOptional()
  person?: Person | null;

  @ApiProperty({
    required: true,
    enum: EnumDisplayStatus,
  })
  @IsEnum(EnumDisplayStatus)
  @Field(() => EnumDisplayStatus, {
    nullable: true,
  })
  status?: "seen" | "responded";

  @ApiProperty({
    required: true,
    type: () => Survey,
  })
  @ValidateNested()
  @Type(() => Survey)
  survey?: Survey;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Display as Display };
