import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EnvironmentTitle } from "../environment/EnvironmentTitle";
import { EventTitle } from "../event/EventTitle";
import { SurveyTriggerTitle } from "../surveyTrigger/SurveyTriggerTitle";

export const EventClassCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <ReferenceInput
          source="environment.id"
          reference="Environment"
          label="Environment"
        >
          <SelectInput optionText={EnvironmentTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="events"
          reference="Event"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <div />
        <ReferenceArrayInput
          source="surveys"
          reference="SurveyTrigger"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SurveyTriggerTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "code", value: "code" },
            { label: "noCode", value: "noCode" },
            { label: "automatic", value: "automatic" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
