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
import { SessionDatumListRelationFilter } from "../../sessionDatum/base/SessionDatumListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { WebsiteEventListRelationFilter } from "../../websiteEvent/base/WebsiteEventListRelationFilter";

@InputType()
class SessionWhereInput {
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
    type: () => WebsiteEventListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WebsiteEventListRelationFilter)
  @IsOptional()
  @Field(() => WebsiteEventListRelationFilter, {
    nullable: true,
  })
  websiteEvent?: WebsiteEventListRelationFilter;
}

export { SessionWhereInput as SessionWhereInput };
