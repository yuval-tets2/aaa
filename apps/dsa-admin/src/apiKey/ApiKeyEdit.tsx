import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { EnvironmentTitle } from "../environment/EnvironmentTitle";

export const ApiKeyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="environment.id"
          reference="Environment"
          label="Environment"
        >
          <SelectInput optionText={EnvironmentTitle} />
        </ReferenceInput>
        <TextInput label="Hashed Key" source="hashedKey" />
        <TextInput label="Label" source="label" />
        <DateTimeInput label="Last Used At" source="lastUsedAt" />
      </SimpleForm>
    </Edit>
  );
};
