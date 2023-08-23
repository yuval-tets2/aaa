import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const BypassCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Course Code" source="courseCode" />
        <NumberInput step={1} label="Hours" source="hours" />
        <TextInput label="Requirement" source="requirement" />
      </SimpleForm>
    </Create>
  );
};
