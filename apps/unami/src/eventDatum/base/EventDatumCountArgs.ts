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
import { EventDatumWhereInput } from "./EventDatumWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class EventDatumCountArgs {
  @ApiProperty({
    required: false,
    type: () => EventDatumWhereInput,
  })
  @Field(() => EventDatumWhereInput, { nullable: true })
  @Type(() => EventDatumWhereInput)
  where?: EventDatumWhereInput;
}

export { EventDatumCountArgs as EventDatumCountArgs };
