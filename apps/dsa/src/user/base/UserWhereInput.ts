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
import { AccountListRelationFilter } from "../../account/base/AccountListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { InviteListRelationFilter } from "../../invite/base/InviteListRelationFilter";
import { MembershipListRelationFilter } from "../../membership/base/MembershipListRelationFilter";
import { ResponseNoteListRelationFilter } from "../../responseNote/base/ResponseNoteListRelationFilter";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: () => AccountListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AccountListRelationFilter)
  @IsOptional()
  @Field(() => AccountListRelationFilter, {
    nullable: true,
  })
  accounts?: AccountListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => InviteListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InviteListRelationFilter)
  @IsOptional()
  @Field(() => InviteListRelationFilter, {
    nullable: true,
  })
  invitesAccepted?: InviteListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => InviteListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InviteListRelationFilter)
  @IsOptional()
  @Field(() => InviteListRelationFilter, {
    nullable: true,
  })
  invitesCreated?: InviteListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => MembershipListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MembershipListRelationFilter)
  @IsOptional()
  @Field(() => MembershipListRelationFilter, {
    nullable: true,
  })
  memberships?: MembershipListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ResponseNoteListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ResponseNoteListRelationFilter)
  @IsOptional()
  @Field(() => ResponseNoteListRelationFilter, {
    nullable: true,
  })
  responseNotes?: ResponseNoteListRelationFilter;
}

export { UserWhereInput as UserWhereInput };
