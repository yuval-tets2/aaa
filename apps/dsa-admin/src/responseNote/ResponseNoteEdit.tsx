import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ResponseTitle } from "../response/ResponseTitle";
import { UserTitle } from "../user/UserTitle";

export const ResponseNoteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
