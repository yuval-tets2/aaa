import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { EnvironmentTitle } from "../environment/EnvironmentTitle";

export const ApiKeyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
