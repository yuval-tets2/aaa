import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EVENTCLASS_TITLE_FIELD } from "../eventClass/EventClassTitle";
import { SESSION_TITLE_FIELD } from "./SessionTitle";
import { PERSON_TITLE_FIELD } from "../person/PersonTitle";

export const SessionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <DateField source="expiresAt" label="Expires At" />
        <TextField label="Id" source="id" />
        <ReferenceField label="Person" source="person.id" reference="Person">
          <TextField source={PERSON_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Event" target="sessionId" label="Events">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Event Class"
              source="eventclass.id"
              reference="EventClass"
            >
              <TextField source={EVENTCLASS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <TextField label="Properties" source="properties" />
            <ReferenceField
              label="Session"
              source="session.id"
              reference="Session"
            >
              <TextField source={SESSION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
