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
import { WebsiteEventWhereInput } from "./WebsiteEventWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WebsiteEventListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WebsiteEventWhereInput,
  })
  @ValidateNested()
  @Type(() => WebsiteEventWhereInput)
  @IsOptional()
  @Field(() => WebsiteEventWhereInput, {
    nullable: true,
  })
  every?: WebsiteEventWhereInput;

  @ApiProperty({
    required: false,
    type: () => WebsiteEventWhereInput,
  })
  @ValidateNested()
  @Type(() => WebsiteEventWhereInput)
  @IsOptional()
  @Field(() => WebsiteEventWhereInput, {
    nullable: true,
  })
  some?: WebsiteEventWhereInput;

  @ApiProperty({
    required: false,
    type: () => WebsiteEventWhereInput,
  })
  @ValidateNested()
  @Type(() => WebsiteEventWhereInput)
  @IsOptional()
  @Field(() => WebsiteEventWhereInput, {
    nullable: true,
  })
  none?: WebsiteEventWhereInput;
}
export { WebsiteEventListRelationFilter as WebsiteEventListRelationFilter };
