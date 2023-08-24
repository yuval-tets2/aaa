import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PRODUCT_TITLE_FIELD } from "./ProductTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Environment"
          target="productId"
          label="Environments"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Type" source="type" />
            <DateField source="updatedAt" label="Updated At" />
            <BooleanField
              label="Widget Setup Completed"
              source="widgetSetupCompleted"
            />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
