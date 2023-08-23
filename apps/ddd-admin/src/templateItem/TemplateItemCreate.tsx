import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TemplateDatumTitle } from "../templateDatum/TemplateDatumTitle";

export const TemplateItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="templateData.id"
          reference="TemplateDatum"
          label="Template Data"
        >
          <SelectInput optionText={TemplateDatumTitle} />
        </ReferenceInput>
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "CORE", value: "CORE" },
            { label: "OPTIONAL", value: "OPTIONAL" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
