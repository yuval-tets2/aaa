/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SurveyAttributeFilterWhereUniqueInput } from "../../surveyAttributeFilter/base/SurveyAttributeFilterWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SurveyAttributeFilterCreateNestedManyWithoutSurveysInput {
  @Field(() => [SurveyAttributeFilterWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SurveyAttributeFilterWhereUniqueInput],
  })
  connect?: Array<SurveyAttributeFilterWhereUniqueInput>;
}

export { SurveyAttributeFilterCreateNestedManyWithoutSurveysInput as SurveyAttributeFilterCreateNestedManyWithoutSurveysInput };
