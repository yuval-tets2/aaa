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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { TeamUserUpdateManyWithoutTeamsInput } from "./TeamUserUpdateManyWithoutTeamsInput";
import { Type } from "class-transformer";
import { TeamWebsiteUpdateManyWithoutTeamsInput } from "./TeamWebsiteUpdateManyWithoutTeamsInput";

@InputType()
class TeamUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  accessCode?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => TeamUserUpdateManyWithoutTeamsInput,
  })
  @ValidateNested()
  @Type(() => TeamUserUpdateManyWithoutTeamsInput)
  @IsOptional()
  @Field(() => TeamUserUpdateManyWithoutTeamsInput, {
    nullable: true,
  })
  teamUser?: TeamUserUpdateManyWithoutTeamsInput;

  @ApiProperty({
    required: false,
    type: () => TeamWebsiteUpdateManyWithoutTeamsInput,
  })
  @ValidateNested()
  @Type(() => TeamWebsiteUpdateManyWithoutTeamsInput)
  @IsOptional()
  @Field(() => TeamWebsiteUpdateManyWithoutTeamsInput, {
    nullable: true,
  })
  teamWebsite?: TeamWebsiteUpdateManyWithoutTeamsInput;
}

export { TeamUpdateInput as TeamUpdateInput };