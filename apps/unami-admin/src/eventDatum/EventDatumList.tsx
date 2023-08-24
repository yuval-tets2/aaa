import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { WEBSITE_TITLE_FIELD } from "../website/WebsiteTitle";
import { WEBSITEEVENT_TITLE_FIELD } from "../websiteEvent/WebsiteEventTitle";

export const EventDatumList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EventData"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
