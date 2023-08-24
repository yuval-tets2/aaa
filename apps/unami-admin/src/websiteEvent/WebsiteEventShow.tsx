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

import { WEBSITE_TITLE_FIELD } from "../website/WebsiteTitle";
import { WEBSITEEVENT_TITLE_FIELD } from "./WebsiteEventTitle";
import { SESSION_TITLE_FIELD } from "../session/SessionTitle";

export const WebsiteEventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Event Name" source="eventName" />
        <TextField label="Event Type" source="eventType" />
        <TextField label="Id" source="id" />
        <TextField label="Page Title" source="pageTitle" />
        <TextField label="Referrer Domain" source="referrerDomain" />
        <TextField label="Referrer Path" source="referrerPath" />
        <TextField label="Referrer Query" source="referrerQuery" />
        <ReferenceField label="Session" source="session.id" reference="Session">
          <TextField source={SESSION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Url Path" source="urlPath" />
        <TextField label="Url Query" source="urlQuery" />
        <TextField label="Website Id" source="websiteId" />
        <ReferenceManyField
          reference="EventDatum"
          target="websiteEventId"
          label="EventData"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Data Type" source="dataType" />
            <TextField label="Date Value" source="dateValue" />
            <TextField label="Event Key" source="eventKey" />
            <TextField label="Id" source="id" />
            <TextField label="Number Value" source="numberValue" />
            <TextField label="String Value" source="stringValue" />
            <ReferenceField
              label="Website"
              source="website.id"
              reference="Website"
            >
              <TextField source={WEBSITE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Website Event"
              source="websiteevent.id"
              reference="WebsiteEvent"
            >
              <TextField source={WEBSITEEVENT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
