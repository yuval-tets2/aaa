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
import { ReportListRelationFilter } from "../../report/base/ReportListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { TeamUserListRelationFilter } from "../../teamUser/base/TeamUserListRelationFilter";
import { WebsiteListRelationFilter } from "../../website/base/WebsiteListRelationFilter";

@InputType()
class UserWhereInput {
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
    type: () => TeamUserListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TeamUserListRelationFilter)
  @IsOptional()
  @Field(() => TeamUserListRelationFilter, {
    nullable: true,
  })
  teamUser?: TeamUserListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => WebsiteListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WebsiteListRelationFilter)
  @IsOptional()
  @Field(() => WebsiteListRelationFilter, {
    nullable: true,
  })
  website?: WebsiteListRelationFilter;
}

export { UserWhereInput as UserWhereInput };
