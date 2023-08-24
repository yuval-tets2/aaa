import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SessionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Sessions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
