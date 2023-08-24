import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SESSION_TITLE_FIELD } from "./SessionTitle";
import { WEBSITE_TITLE_FIELD } from "../website/WebsiteTitle";

export const SessionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Browser" source="browser" />
        <TextField label="City" source="city" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Device" source="device" />
        <TextField label="Hostname" source="hostname" />
        <TextField label="Id" source="id" />
        <TextField label="Language" source="language" />
        <TextField label="Os" source="os" />
        <TextField label="Screen" source="screen" />
        <TextField label="Subdivision1" source="subdivision1" />
        <TextField label="Subdivision2" source="subdivision2" />
        <TextField label="Website Id" source="websiteId" />
        <ReferenceManyField
          reference="SessionDatum"
          target="sessionId"
          label="SessionData"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Data Type" source="dataType" />
            <TextField label="Date Value" source="dateValue" />
            <TextField label="Event Key" source="eventKey" />
            <TextField label="Id" source="id" />
            <TextField label="Number Value" source="numberValue" />
            <ReferenceField
              label="Session"
              source="session.id"
              reference="Session"
            >
              <TextField source={SESSION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="String Value" source="stringValue" />
            <ReferenceField
              label="Website"
              source="website.id"
              reference="Website"
            >
              <TextField source={WEBSITE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WebsiteEvent"
          target="sessionId"
          label="WebsiteEvents"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Event Name" source="eventName" />
            <TextField label="Event Type" source="eventType" />
            <TextField label="Id" source="id" />
            <TextField label="Page Title" source="pageTitle" />
            <TextField label="Referrer Domain" source="referrerDomain" />
            <TextField label="Referrer Path" source="referrerPath" />
            <TextField label="Referrer Query" source="referrerQuery" />
            <ReferenceField
              label="Session"
              source="session.id"
              reference="Session"
            >
              <TextField source={SESSION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Url Path" source="urlPath" />
            <TextField label="Url Query" source="urlQuery" />
            <TextField label="Website Id" source="websiteId" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
