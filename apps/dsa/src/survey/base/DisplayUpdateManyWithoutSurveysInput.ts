/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DisplayWhereUniqueInput } from "../../display/base/DisplayWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DisplayUpdateManyWithoutSurveysInput {
  @Field(() => [DisplayWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DisplayWhereUniqueInput],
  })
  connect?: Array<DisplayWhereUniqueInput>;

  @Field(() => [DisplayWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DisplayWhereUniqueInput],
  })
  disconnect?: Array<DisplayWhereUniqueInput>;

  @Field(() => [DisplayWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DisplayWhereUniqueInput],
  })
  set?: Array<DisplayWhereUniqueInput>;
}

export { DisplayUpdateManyWithoutSurveysInput as DisplayUpdateManyWithoutSurveysInput };
