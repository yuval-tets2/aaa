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
import { TemplateItemCreateNestedManyWithoutTemplateDataInput } from "./TemplateItemCreateNestedManyWithoutTemplateDataInput";
import { ValidateNested, IsOptional, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TemplateWhereUniqueInput } from "../../template/base/TemplateWhereUniqueInput";

@InputType()
class TemplateDatumCreateInput {
  @ApiProperty({
    required: false,
    type: () => TemplateItemCreateNestedManyWithoutTemplateDataInput,
  })
  @ValidateNested()
  @Type(() => TemplateItemCreateNestedManyWithoutTemplateDataInput)
  @IsOptional()
  @Field(() => TemplateItemCreateNestedManyWithoutTemplateDataInput, {
    nullable: true,
  })
  items?: TemplateItemCreateNestedManyWithoutTemplateDataInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  semester!: number;

  @ApiProperty({
    required: true,
    type: () => TemplateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TemplateWhereUniqueInput)
  @Field(() => TemplateWhereUniqueInput)
  template!: TemplateWhereUniqueInput;
}

export { TemplateDatumCreateInput as TemplateDatumCreateInput };
