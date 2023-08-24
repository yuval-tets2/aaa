import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TeamTitle } from "../team/TeamTitle";
import { WebsiteTitle } from "../website/WebsiteTitle";

export const TeamWebsiteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="team.id" reference="Team" label="Team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
        <ReferenceInput source="website.id" reference="Website" label="Website">
          <SelectInput optionText={WebsiteTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
