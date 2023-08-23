/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested, IsEnum } from "class-validator";
import { TemplateDatum } from "../../templateDatum/base/TemplateDatum";
import { Type } from "class-transformer";
import { EnumTemplateItemType } from "./EnumTemplateItemType";

@ObjectType()
class TemplateItem {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: () => TemplateDatum,
  })
  @ValidateNested()
  @Type(() => TemplateDatum)
  templateData?: TemplateDatum;

  @ApiProperty({
    required: true,
    enum: EnumTemplateItemType,
  })
  @IsEnum(EnumTemplateItemType)
  @Field(() => EnumTemplateItemType, {
    nullable: true,
  })
  type?: "CORE" | "OPTIONAL";
}

export { TemplateItem as TemplateItem };
