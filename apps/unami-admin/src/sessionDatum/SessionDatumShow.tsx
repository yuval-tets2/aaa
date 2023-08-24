import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SESSION_TITLE_FIELD } from "../session/SessionTitle";
import { WEBSITE_TITLE_FIELD } from "../website/WebsiteTitle";

export const SessionDatumShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Data Type" source="dataType" />
        <TextField label="Date Value" source="dateValue" />
        <TextField label="Event Key" source="eventKey" />
        <TextField label="Id" source="id" />
        <TextField label="Number Value" source="numberValue" />
        <ReferenceField label="Session" source="session.id" reference="Session">
          <TextField source={SESSION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="String Value" source="stringValue" />
        <ReferenceField label="Website" source="website.id" reference="Website">
          <TextField source={WEBSITE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
