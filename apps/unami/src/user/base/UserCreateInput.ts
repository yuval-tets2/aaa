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
import { IsDate, IsOptional, ValidateNested, IsString } from "class-validator";
import { Type } from "class-transformer";
import { ReportCreateNestedManyWithoutUsersInput } from "./ReportCreateNestedManyWithoutUsersInput";
import { TeamUserCreateNestedManyWithoutUsersInput } from "./TeamUserCreateNestedManyWithoutUsersInput";
import { WebsiteCreateNestedManyWithoutUsersInput } from "./WebsiteCreateNestedManyWithoutUsersInput";

@InputType()
class UserCreateInput {
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
    type: () => ReportCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ReportCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ReportCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  report?: ReportCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  role!: string;

  @ApiProperty({
    required: false,
    type: () => TeamUserCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => TeamUserCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => TeamUserCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  teamUser?: TeamUserCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => WebsiteCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => WebsiteCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => WebsiteCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  website?: WebsiteCreateNestedManyWithoutUsersInput;
}

export { UserCreateInput as UserCreateInput };
