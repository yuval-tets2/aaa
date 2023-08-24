import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RESPONSE_TITLE_FIELD } from "../response/ResponseTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";

export const TagsOnResponseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TagsOnResponses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <ReferenceField
          label="Response"
          source="response.id"
          reference="Response"
        >
          <TextField source={RESPONSE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tag" source="tag.id" reference="Tag">
          <TextField source={TAG_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
