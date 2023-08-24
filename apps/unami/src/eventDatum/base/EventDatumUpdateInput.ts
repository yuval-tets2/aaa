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
  IsInt,
  IsOptional,
  IsDate,
  IsString,
  IsNumber,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { WebsiteWhereUniqueInput } from "../../website/base/WebsiteWhereUniqueInput";
import { WebsiteEventWhereUniqueInput } from "../../websiteEvent/base/WebsiteEventWhereUniqueInput";

@InputType()
class EventDatumUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  dataType?: number;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateValue?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  eventKey?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  numberValue?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  stringValue?: string | null;

  @ApiProperty({
    required: false,
    type: () => WebsiteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WebsiteWhereUniqueInput)
  @IsOptional()
  @Field(() => WebsiteWhereUniqueInput, {
    nullable: true,
  })
  website?: WebsiteWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => WebsiteEventWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WebsiteEventWhereUniqueInput)
  @IsOptional()
  @Field(() => WebsiteEventWhereUniqueInput, {
    nullable: true,
  })
  websiteEvent?: WebsiteEventWhereUniqueInput;
}

export { EventDatumUpdateInput as EventDatumUpdateInput };