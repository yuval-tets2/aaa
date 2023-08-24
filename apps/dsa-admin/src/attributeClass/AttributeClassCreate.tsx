import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SurveyAttributeFilterTitle } from "../surveyAttributeFilter/SurveyAttributeFilterTitle";
import { AttributeTitle } from "../attribute/AttributeTitle";
import { EnvironmentTitle } from "../environment/EnvironmentTitle";

export const AttributeClassCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Archived" source="archived" />
        <ReferenceArrayInput
          source="attributeFilters"
          reference="SurveyAttributeFilter"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SurveyAttributeFilterTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="attributes"
          reference="Attribute"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttributeTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" source="description" />
        <ReferenceInput
          source="environment.id"
          reference="Environment"
          label="Environment"
        >
          <SelectInput optionText={EnvironmentTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
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
