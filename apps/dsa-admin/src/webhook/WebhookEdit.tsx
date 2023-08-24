import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  SelectArrayInput,
} from "react-admin";

import { EnvironmentTitle } from "../environment/EnvironmentTitle";

export const WebhookEdit = (props: EditProps): React.ReactElement => {
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
        <TextInput label="Name" source="name" />
        <TextInput label="Survey Ids" source="surveyIds" />
        <SelectArrayInput
          label="Triggers"
          source="triggers"
          choices={[
            { label: "responseCreated", value: "responseCreated" },
            { label: "responseUpdated", value: "responseUpdated" },
            { label: "responseFinished", value: "responseFinished" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
