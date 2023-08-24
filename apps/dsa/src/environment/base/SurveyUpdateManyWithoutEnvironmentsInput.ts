/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SurveyWhereUniqueInput } from "../../survey/base/SurveyWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SurveyUpdateManyWithoutEnvironmentsInput {
  @Field(() => [SurveyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SurveyWhereUniqueInput],
  })
  connect?: Array<SurveyWhereUniqueInput>;

  @Field(() => [SurveyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SurveyWhereUniqueInput],
  })
  disconnect?: Array<SurveyWhereUniqueInput>;

  @Field(() => [SurveyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SurveyWhereUniqueInput],
  })
  set?: Array<SurveyWhereUniqueInput>;
}

export { SurveyUpdateManyWithoutEnvironmentsInput as SurveyUpdateManyWithoutEnvironmentsInput };
