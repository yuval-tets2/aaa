import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AttributeClassTitle } from "../attributeClass/AttributeClassTitle";
import { PersonTitle } from "../person/PersonTitle";

export const AttributeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="attributeClass.id"
          reference="AttributeClass"
          label="Attribute Class"
        >
          <SelectInput optionText={AttributeClassTitle} />
        </ReferenceInput>
        <ReferenceInput source="person.id" reference="Person" label="Person">
          <SelectInput optionText={PersonTitle} />
        </ReferenceInput>
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
