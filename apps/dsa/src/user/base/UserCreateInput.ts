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
import { AccountCreateNestedManyWithoutUsersInput } from "./AccountCreateNestedManyWithoutUsersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsEnum,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumUserIdentityProvider } from "./EnumUserIdentityProvider";
import { InviteCreateNestedManyWithoutUsersInput } from "./InviteCreateNestedManyWithoutUsersInput";
import { MembershipCreateNestedManyWithoutUsersInput } from "./MembershipCreateNestedManyWithoutUsersInput";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumUserObjective } from "./EnumUserObjective";
import { ResponseNoteCreateNestedManyWithoutUsersInput } from "./ResponseNoteCreateNestedManyWithoutUsersInput";
import { EnumUserRole } from "./EnumUserRole";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => AccountCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AccountCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AccountCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  accounts?: AccountCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  emailVerified?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  groupId?: string | null;

  @ApiProperty({
    required: true,
    enum: EnumUserIdentityProvider,
  })
  @IsEnum(EnumUserIdentityProvider)
  @Field(() => EnumUserIdentityProvider)
  identityProvider!: "email" | "github" | "google";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  identityProviderAccountId?: string | null;

  @ApiProperty({
    required: false,
    type: () => InviteCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => InviteCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => InviteCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  invitesAccepted?: InviteCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => InviteCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => InviteCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => InviteCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  invitesCreated?: InviteCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => MembershipCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => MembershipCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => MembershipCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  memberships?: MembershipCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  notificationSettings!: InputJsonValue;

  @ApiProperty({
    required: false,
    enum: EnumUserObjective,
  })
  @IsEnum(EnumUserObjective)
  @IsOptional()
  @Field(() => EnumUserObjective, {
    nullable: true,
  })
  objective?:
    | "increase_conversion"
    | "improve_user_retention"
    | "increase_user_adoption"
    | "sharpen_marketing_messaging"
    | "support_sales"
    | "other"
    | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  onboardingCompleted!: boolean;

  @ApiProperty({
    required: false,
    type: () => ResponseNoteCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ResponseNoteCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ResponseNoteCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  responseNotes?: ResponseNoteCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    enum: EnumUserRole,
  })
  @IsEnum(EnumUserRole)
  @IsOptional()
  @Field(() => EnumUserRole, {
    nullable: true,
  })
  role?:
    | "project_manager"
    | "engineer"
    | "founder"
    | "marketing_specialist"
    | "other"
    | null;
}

export { UserCreateInput as UserCreateInput };
