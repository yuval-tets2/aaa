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
import { SessionDatumWhereUniqueInput } from "./SessionDatumWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SessionDatumUpdateInput } from "./SessionDatumUpdateInput";

@ArgsType()
class UpdateSessionDatumArgs {
  @ApiProperty({
    required: true,
    type: () => SessionDatumWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SessionDatumWhereUniqueInput)
  @Field(() => SessionDatumWhereUniqueInput, { nullable: false })
  where!: SessionDatumWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SessionDatumUpdateInput,
  })
  @ValidateNested()
  @Type(() => SessionDatumUpdateInput)
  @Field(() => SessionDatumUpdateInput, { nullable: false })
  data!: SessionDatumUpdateInput;
}

export { UpdateSessionDatumArgs as UpdateSessionDatumArgs };
