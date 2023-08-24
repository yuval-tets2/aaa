import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { RESPONSE_TITLE_FIELD } from "../response/ResponseTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ResponseNoteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Id" source="id" />
        <ReferenceField
          label="Response"
          source="response.id"
          reference="Response"
        >
          <TextField source={RESPONSE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Text" source="text" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
