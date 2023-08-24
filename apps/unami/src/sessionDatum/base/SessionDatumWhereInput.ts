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
import { SessionWhereUniqueInput } from "../../session/base/SessionWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { WebsiteWhereUniqueInput } from "../../website/base/WebsiteWhereUniqueInput";

@InputType()
class SessionDatumWhereInput {
  @ApiProperty({
    required: false,
    type: () => SessionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SessionWhereUniqueInput)
  @IsOptional()
  @Field(() => SessionWhereUniqueInput, {
    nullable: true,
  })
  session?: SessionWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => WebsiteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WebsiteWhereUniqueInput)
  @IsOptional()
  @Field(() => WebsiteWhereUniqueInput, {
    nullable: true,
  })
  website?: WebsiteWhereUniqueInput;
}

export { SessionDatumWhereInput as SessionDatumWhereInput };