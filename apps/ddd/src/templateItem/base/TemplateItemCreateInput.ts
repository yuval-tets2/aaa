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
import { IsString, ValidateNested, IsEnum } from "class-validator";
import { TemplateDatumWhereUniqueInput } from "../../templateDatum/base/TemplateDatumWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumTemplateItemType } from "./EnumTemplateItemType";

@InputType()
class TemplateItemCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: () => TemplateDatumWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TemplateDatumWhereUniqueInput)
  @Field(() => TemplateDatumWhereUniqueInput)
  templateData!: TemplateDatumWhereUniqueInput;

  @ApiProperty({
    required: true,
    enum: EnumTemplateItemType,
  })
  @IsEnum(EnumTemplateItemType)
  @Field(() => EnumTemplateItemType)
  type!: "CORE" | "OPTIONAL";
}

export { TemplateItemCreateInput as TemplateItemCreateInput };