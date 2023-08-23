import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TEMPLATEDATUM_TITLE_FIELD } from "../templateDatum/TemplateDatumTitle";

export const TemplateItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TemplateItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Template Data"
          source="templatedatum.id"
          reference="TemplateDatum"
        >
          <TextField source={TEMPLATEDATUM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Type" source="type" />
      </Datagrid>
    </List>
  );
};
