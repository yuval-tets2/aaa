/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EventClassWhereInput } from "./EventClassWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class EventClassCountArgs {
  @ApiProperty({
    required: false,
    type: () => EventClassWhereInput,
  })
  @Field(() => EventClassWhereInput, { nullable: true })
  @Type(() => EventClassWhereInput)
  where?: EventClassWhereInput;
}

export { EventClassCountArgs as EventClassCountArgs };
