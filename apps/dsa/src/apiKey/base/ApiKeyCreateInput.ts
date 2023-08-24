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
import { EnvironmentWhereUniqueInput } from "../../environment/base/EnvironmentWhereUniqueInput";
import { ValidateNested, IsString, IsOptional, IsDate } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ApiKeyCreateInput {
  @ApiProperty({
    required: true,
    type: () => EnvironmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EnvironmentWhereUniqueInput)
  @Field(() => EnvironmentWhereUniqueInput)
  environment!: EnvironmentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  hashedKey!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  label?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  lastUsedAt?: Date | null;
}

export { ApiKeyCreateInput as ApiKeyCreateInput };
