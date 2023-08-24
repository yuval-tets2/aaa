import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ENVIRONMENT_TITLE_FIELD } from "../environment/EnvironmentTitle";

export const ApiKeyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ApiKeys"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Environment"
          source="environment.id"
          reference="Environment"
        >
          <TextField source={ENVIRONMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Hashed Key" source="hashedKey" />
        <TextField label="Id" source="id" />
        <TextField label="Label" source="label" />
        <TextField label="Last Used At" source="lastUsedAt" />
      </Datagrid>
    </List>
  );
};
