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
import { IsString, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { TemplateDatumWhereUniqueInput } from "../../templateDatum/base/TemplateDatumWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumTemplateItemType } from "./EnumTemplateItemType";

@InputType()
class TemplateItemUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => TemplateDatumWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TemplateDatumWhereUniqueInput)
  @IsOptional()
  @Field(() => TemplateDatumWhereUniqueInput, {
    nullable: true,
  })
  templateData?: TemplateDatumWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumTemplateItemType,
  })
  @IsEnum(EnumTemplateItemType)
  @IsOptional()
  @Field(() => EnumTemplateItemType, {
    nullable: true,
  })
  type?: "CORE" | "OPTIONAL";
}

export { TemplateItemUpdateInput as TemplateItemUpdateInput };
