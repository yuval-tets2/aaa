import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AttributeClassTitle } from "../attributeClass/AttributeClassTitle";
import { SurveyTitle } from "../survey/SurveyTitle";

export const SurveyAttributeFilterCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="attributeClass.id"
          reference="AttributeClass"
          label="Attribute Class"
        >
          <SelectInput optionText={AttributeClassTitle} />
        </ReferenceInput>
        <SelectInput
          source="condition"
          label="Condition"
          choices={[
            { label: "equals", value: "equals" },
            { label: "notEquals", value: "notEquals" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="survey.id" reference="Survey" label="Survey">
          <SelectInput optionText={SurveyTitle} />
        </ReferenceInput>
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Create>
  );
};
