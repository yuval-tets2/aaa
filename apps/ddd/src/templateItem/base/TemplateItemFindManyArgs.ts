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
import { TemplateItemWhereInput } from "./TemplateItemWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TemplateItemOrderByInput } from "./TemplateItemOrderByInput";

@ArgsType()
class TemplateItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TemplateItemWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TemplateItemWhereInput, { nullable: true })
  @Type(() => TemplateItemWhereInput)
  where?: TemplateItemWhereInput;

  @ApiProperty({
    required: false,
    type: [TemplateItemOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TemplateItemOrderByInput], { nullable: true })
  @Type(() => TemplateItemOrderByInput)
  orderBy?: Array<TemplateItemOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TemplateItemFindManyArgs as TemplateItemFindManyArgs };
