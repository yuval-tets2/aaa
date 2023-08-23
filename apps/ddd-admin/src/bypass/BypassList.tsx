import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BypassList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Bypasses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Course Code" source="courseCode" />
        <TextField label="Hours" source="hours" />
        <TextField label="Id" source="id" />
        <TextField label="Requirement" source="requirement" />
      </Datagrid>
    </List>
  );
};
