import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { WEBSITE_TITLE_FIELD } from "../website/WebsiteTitle";
import { WEBSITEEVENT_TITLE_FIELD } from "../websiteEvent/WebsiteEventTitle";

export const EventDatumShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Data Type" source="dataType" />
        <TextField label="Date Value" source="dateValue" />
        <TextField label="Event Key" source="eventKey" />
        <TextField label="Id" source="id" />
        <TextField label="Number Value" source="numberValue" />
        <TextField label="String Value" source="stringValue" />
        <ReferenceField label="Website" source="website.id" reference="Website">
          <TextField source={WEBSITE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Website Event"
          source="websiteevent.id"
          reference="WebsiteEvent"
        >
          <TextField source={WEBSITEEVENT_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
