import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { TeamTitle } from "../team/TeamTitle";

export const InviteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Accepted" source="accepted" />
        <ReferenceInput source="acceptor.id" reference="User" label="Acceptor">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="creator.id" reference="User" label="Creator">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Email" source="email" />
        <DateTimeInput label="Expires At" source="expiresAt" />
        <TextInput label="Name" source="name" />
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
      </SimpleForm>
    </Edit>
  );
};
