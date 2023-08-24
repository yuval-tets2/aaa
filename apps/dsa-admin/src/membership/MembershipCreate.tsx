import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { TeamTitle } from "../team/TeamTitle";
import { UserTitle } from "../user/UserTitle";

export const MembershipCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Accepted" source="accepted" />
        <SelectInput
          source="role"
          label="Role"
          choices={[
            { label: "owner", value: "owner" },
            { label: "admin", value: "admin" },
            { label: "editor", value: "editor" },
            { label: "developer", value: "developer" },
            { label: "viewer", value: "viewer" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="team.id" reference="Team" label="Team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
