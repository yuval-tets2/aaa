import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ResponseTitle } from "../response/ResponseTitle";
import { UserTitle } from "../user/UserTitle";

export const ResponseNoteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="response.id"
          reference="Response"
          label="Response"
        >
          <SelectInput optionText={ResponseTitle} />
        </ReferenceInput>
        <TextInput label="Text" source="text" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
