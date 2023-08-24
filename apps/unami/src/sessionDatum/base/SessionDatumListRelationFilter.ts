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
import { SessionDatumWhereInput } from "./SessionDatumWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SessionDatumListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SessionDatumWhereInput,
  })
  @ValidateNested()
  @Type(() => SessionDatumWhereInput)
  @IsOptional()
  @Field(() => SessionDatumWhereInput, {
    nullable: true,
  })
  every?: SessionDatumWhereInput;

  @ApiProperty({
    required: false,
    type: () => SessionDatumWhereInput,
  })
  @ValidateNested()
  @Type(() => SessionDatumWhereInput)
  @IsOptional()
  @Field(() => SessionDatumWhereInput, {
    nullable: true,
  })
  some?: SessionDatumWhereInput;

  @ApiProperty({
    required: false,
    type: () => SessionDatumWhereInput,
  })
  @ValidateNested()
  @Type(() => SessionDatumWhereInput)
  @IsOptional()
  @Field(() => SessionDatumWhereInput, {
    nullable: true,
  })
  none?: SessionDatumWhereInput;
}
export { SessionDatumListRelationFilter as SessionDatumListRelationFilter };
