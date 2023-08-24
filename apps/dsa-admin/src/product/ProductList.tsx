import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Brand Color" source="brandColor" />
        <BooleanField label="Click Outside Close" source="clickOutsideClose" />
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="Dark Overlay" source="darkOverlay" />
        <BooleanField
          label="Formbricks Signature"
          source="formbricksSignature"
        />
        <TextField
          label="Highlight Border Color"
          source="highlightBorderColor"
        />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Placement" source="placement" />
        <TextField label="Recontact Days" source="recontactDays" />
        <ReferenceField label="Team" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
