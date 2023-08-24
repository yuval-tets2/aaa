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

import { WEBSITE_TITLE_FIELD } from "./WebsiteTitle";
import { WEBSITEEVENT_TITLE_FIELD } from "../websiteEvent/WebsiteEventTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { SESSION_TITLE_FIELD } from "../session/SessionTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";

export const WebsiteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="Domain" source="domain" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Reset At" source="resetAt" />
        <TextField label="Share Id" source="shareId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="EventDatum"
          target="websiteId"
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
        <ReferenceManyField
          reference="Report"
          target="websiteId"
          label="Reports"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="Id" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Parameters" source="parameters" />
            <TextField label="Type Field" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
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
          reference="SessionDatum"
          target="websiteId"
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
          reference="TeamWebsite"
          target="websiteId"
          label="TeamWebsites"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Id" source="id" />
            <ReferenceField label="Team" source="team.id" reference="Team">
              <TextField source={TEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Website"
              source="website.id"
              reference="Website"
            >
              <TextField source={WEBSITE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
