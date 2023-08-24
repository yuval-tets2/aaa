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
import { SESSION_TITLE_FIELD } from "../session/SessionTitle";

export const WebsiteEventList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WebsiteEvents"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="Session" source="session.id" reference="Session">
          <TextField source={SESSION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Url Path" source="urlPath" />
        <TextField label="Url Query" source="urlQuery" />
        <TextField label="Website Id" source="websiteId" />
      </Datagrid>
    </List>
  );
};
