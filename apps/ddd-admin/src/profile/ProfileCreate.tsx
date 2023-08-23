import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  NumberInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const ProfileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="endSemester"
          label="End Semester"
          choices={[
            { label: "f", value: "f" },
            { label: "s", value: "s" },
            { label: "u", value: "u" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="End Year" source="endYear" />
        <TextInput label="Name" source="name" />
        <SelectInput
          source="startSemester"
          label="Start Semester"
          choices={[
            { label: "f", value: "f" },
            { label: "s", value: "s" },
            { label: "u", value: "u" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Start Year" source="startYear" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
