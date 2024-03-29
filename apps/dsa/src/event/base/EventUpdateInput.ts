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
import { EventClassWhereUniqueInput } from "../../eventClass/base/EventClassWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { SessionWhereUniqueInput } from "../../session/base/SessionWhereUniqueInput";

@InputType()
class EventUpdateInput {
  @ApiProperty({
    required: false,
    type: () => EventClassWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EventClassWhereUniqueInput)
  @IsOptional()
  @Field(() => EventClassWhereUniqueInput, {
    nullable: true,
  })
  eventClass?: EventClassWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  properties?: InputJsonValue;

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
}

export { EventUpdateInput as EventUpdateInput };
