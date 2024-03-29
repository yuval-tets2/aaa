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
  IsDate,
  IsOptional,
  IsString,
  IsNumber,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { WebsiteWhereUniqueInput } from "../../website/base/WebsiteWhereUniqueInput";
import { WebsiteEventWhereUniqueInput } from "../../websiteEvent/base/WebsiteEventWhereUniqueInput";

@InputType()
class EventDatumCreateInput {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  dataType!: number;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  eventKey!: string;

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
    required: true,
    type: () => WebsiteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WebsiteWhereUniqueInput)
  @Field(() => WebsiteWhereUniqueInput)
  website!: WebsiteWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => WebsiteEventWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WebsiteEventWhereUniqueInput)
  @Field(() => WebsiteEventWhereUniqueInput)
  websiteEvent!: WebsiteEventWhereUniqueInput;
}

export { EventDatumCreateInput as EventDatumCreateInput };
