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
import { IsDate, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EventDatumCreateNestedManyWithoutWebsitesInput } from "./EventDatumCreateNestedManyWithoutWebsitesInput";
import { ReportCreateNestedManyWithoutWebsitesInput } from "./ReportCreateNestedManyWithoutWebsitesInput";
import { SessionDatumCreateNestedManyWithoutWebsitesInput } from "./SessionDatumCreateNestedManyWithoutWebsitesInput";
import { TeamWebsiteCreateNestedManyWithoutWebsitesInput } from "./TeamWebsiteCreateNestedManyWithoutWebsitesInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class WebsiteCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  deletedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  domain?: string | null;

  @ApiProperty({
    required: false,
    type: () => EventDatumCreateNestedManyWithoutWebsitesInput,
  })
  @ValidateNested()
  @Type(() => EventDatumCreateNestedManyWithoutWebsitesInput)
  @IsOptional()
  @Field(() => EventDatumCreateNestedManyWithoutWebsitesInput, {
    nullable: true,
  })
  eventData?: EventDatumCreateNestedManyWithoutWebsitesInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => ReportCreateNestedManyWithoutWebsitesInput,
  })
  @ValidateNested()
  @Type(() => ReportCreateNestedManyWithoutWebsitesInput)
  @IsOptional()
  @Field(() => ReportCreateNestedManyWithoutWebsitesInput, {
    nullable: true,
  })
  report?: ReportCreateNestedManyWithoutWebsitesInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  resetAt?: Date | null;

  @ApiProperty({
    required: false,
    type: () => SessionDatumCreateNestedManyWithoutWebsitesInput,
  })
  @ValidateNested()
  @Type(() => SessionDatumCreateNestedManyWithoutWebsitesInput)
  @IsOptional()
  @Field(() => SessionDatumCreateNestedManyWithoutWebsitesInput, {
    nullable: true,
  })
  sessionData?: SessionDatumCreateNestedManyWithoutWebsitesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  shareId?: string | null;

  @ApiProperty({
    required: false,
    type: () => TeamWebsiteCreateNestedManyWithoutWebsitesInput,
  })
  @ValidateNested()
  @Type(() => TeamWebsiteCreateNestedManyWithoutWebsitesInput)
  @IsOptional()
  @Field(() => TeamWebsiteCreateNestedManyWithoutWebsitesInput, {
    nullable: true,
  })
  teamWebsite?: TeamWebsiteCreateNestedManyWithoutWebsitesInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { WebsiteCreateInput as WebsiteCreateInput };
