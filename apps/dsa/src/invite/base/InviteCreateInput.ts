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
  IsBoolean,
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsEnum,
} from "class-validator";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumInviteRole } from "./EnumInviteRole";
import { TeamWhereUniqueInput } from "../../team/base/TeamWhereUniqueInput";

@InputType()
class InviteCreateInput {
  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  accepted!: boolean;

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
  acceptor?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  creator!: UserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  expiresAt!: Date;

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
    enum: EnumInviteRole,
  })
  @IsEnum(EnumInviteRole)
  @Field(() => EnumInviteRole)
  role!: "owner" | "admin" | "editor" | "developer" | "viewer";

  @ApiProperty({
    required: true,
    type: () => TeamWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TeamWhereUniqueInput)
  @Field(() => TeamWhereUniqueInput)
  team!: TeamWhereUniqueInput;
}

export { InviteCreateInput as InviteCreateInput };