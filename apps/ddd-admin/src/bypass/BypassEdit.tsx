import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const BypassEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Course Code" source="courseCode" />
        <NumberInput step={1} label="Hours" source="hours" />
        <TextInput label="Requirement" source="requirement" />
      </SimpleForm>
    </Edit>
  );
};
