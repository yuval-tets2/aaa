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
import { EventClassWhereUniqueInput } from "./EventClassWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EventClassUpdateInput } from "./EventClassUpdateInput";

@ArgsType()
class UpdateEventClassArgs {
  @ApiProperty({
    required: true,
    type: () => EventClassWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EventClassWhereUniqueInput)
  @Field(() => EventClassWhereUniqueInput, { nullable: false })
  where!: EventClassWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EventClassUpdateInput,
  })
  @ValidateNested()
  @Type(() => EventClassUpdateInput)
  @Field(() => EventClassUpdateInput, { nullable: false })
  data!: EventClassUpdateInput;
}

export { UpdateEventClassArgs as UpdateEventClassArgs };
