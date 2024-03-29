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
import { EventDatumListRelationFilter } from "../../eventDatum/base/EventDatumListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ReportListRelationFilter } from "../../report/base/ReportListRelationFilter";
import { SessionDatumListRelationFilter } from "../../sessionDatum/base/SessionDatumListRelationFilter";
import { TeamWebsiteListRelationFilter } from "../../teamWebsite/base/TeamWebsiteListRelationFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class WebsiteWhereInput {
  @ApiProperty({
    required: false,
    type: () => EventDatumListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EventDatumListRelationFilter)
  @IsOptional()
  @Field(() => EventDatumListRelationFilter, {
    nullable: true,
  })
  eventData?: EventDatumListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ReportListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ReportListRelationFilter)
  @IsOptional()
  @Field(() => ReportListRelationFilter, {
    nullable: true,
  })
  report?: ReportListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SessionDatumListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SessionDatumListRelationFilter)
  @IsOptional()
  @Field(() => SessionDatumListRelationFilter, {
    nullable: true,
  })
  sessionData?: SessionDatumListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => TeamWebsiteListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TeamWebsiteListRelationFilter)
  @IsOptional()
  @Field(() => TeamWebsiteListRelationFilter, {
    nullable: true,
  })
  teamWebsite?: TeamWebsiteListRelationFilter;

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
  user?: UserWhereUniqueInput;
}

export { WebsiteWhereInput as WebsiteWhereInput };
