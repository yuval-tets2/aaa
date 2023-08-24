/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TeamWebsiteWhereUniqueInput } from "../../teamWebsite/base/TeamWebsiteWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TeamWebsiteUpdateManyWithoutTeamsInput {
  @Field(() => [TeamWebsiteWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TeamWebsiteWhereUniqueInput],
  })
  connect?: Array<TeamWebsiteWhereUniqueInput>;

  @Field(() => [TeamWebsiteWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TeamWebsiteWhereUniqueInput],
  })
  disconnect?: Array<TeamWebsiteWhereUniqueInput>;

  @Field(() => [TeamWebsiteWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TeamWebsiteWhereUniqueInput],
  })
  set?: Array<TeamWebsiteWhereUniqueInput>;
}

export { TeamWebsiteUpdateManyWithoutTeamsInput as TeamWebsiteUpdateManyWithoutTeamsInput };
