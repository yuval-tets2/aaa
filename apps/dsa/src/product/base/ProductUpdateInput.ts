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
import {
  IsString,
  IsOptional,
  IsBoolean,
  ValidateNested,
  IsEnum,
  IsInt,
} from "class-validator";
import { EnvironmentUpdateManyWithoutProductsInput } from "./EnvironmentUpdateManyWithoutProductsInput";
import { Type } from "class-transformer";
import { EnumProductPlacement } from "./EnumProductPlacement";
import { TeamWhereUniqueInput } from "../../team/base/TeamWhereUniqueInput";

@InputType()
class ProductUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  brandColor?: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  clickOutsideClose?: boolean;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  darkOverlay?: boolean;

  @ApiProperty({
    required: false,
    type: () => EnvironmentUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => EnvironmentUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => EnvironmentUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  environments?: EnvironmentUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  formbricksSignature?: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  highlightBorderColor?: string | null;

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
    enum: EnumProductPlacement,
  })
  @IsEnum(EnumProductPlacement)
  @IsOptional()
  @Field(() => EnumProductPlacement, {
    nullable: true,
  })
  placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight" | "center";

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  recontactDays?: number;

  @ApiProperty({
    required: false,
    type: () => TeamWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TeamWhereUniqueInput)
  @IsOptional()
  @Field(() => TeamWhereUniqueInput, {
    nullable: true,
  })
  team?: TeamWhereUniqueInput;
}

export { ProductUpdateInput as ProductUpdateInput };