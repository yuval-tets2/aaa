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
import { ResponseNoteWhereUniqueInput } from "./ResponseNoteWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ResponseNoteUpdateInput } from "./ResponseNoteUpdateInput";

@ArgsType()
class UpdateResponseNoteArgs {
  @ApiProperty({
    required: true,
    type: () => ResponseNoteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ResponseNoteWhereUniqueInput)
  @Field(() => ResponseNoteWhereUniqueInput, { nullable: false })
  where!: ResponseNoteWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ResponseNoteUpdateInput,
  })
  @ValidateNested()
  @Type(() => ResponseNoteUpdateInput)
  @Field(() => ResponseNoteUpdateInput, { nullable: false })
  data!: ResponseNoteUpdateInput;
}

export { UpdateResponseNoteArgs as UpdateResponseNoteArgs };
