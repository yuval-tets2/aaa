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
import { Invite } from "../../invite/base/Invite";
import { Membership } from "../../membership/base/Membership";
import { EnumTeamPlan } from "./EnumTeamPlan";
import { Product } from "../../product/base/Product";

@ObjectType()
class Team {
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
    type: () => [Invite],
  })
  @ValidateNested()
  @Type(() => Invite)
  @IsOptional()
  invites?: Array<Invite>;

  @ApiProperty({
    required: false,
    type: () => [Membership],
  })
  @ValidateNested()
  @Type(() => Membership)
  @IsOptional()
  memberships?: Array<Membership>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    enum: EnumTeamPlan,
  })
  @IsEnum(EnumTeamPlan)
  @Field(() => EnumTeamPlan, {
    nullable: true,
  })
  plan?: "free" | "pro";

  @ApiProperty({
    required: false,
    type: () => [Product],
  })
  @ValidateNested()
  @Type(() => Product)
  @IsOptional()
  products?: Array<Product>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  stripeCustomerId!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Team as Team };
