import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { TEAM_TITLE_FIELD } from "./TeamTitle";

export const TeamShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Plan" source="plan" />
        <TextField label="Stripe Customer Id" source="stripeCustomerId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Invite" target="teamId" label="Invites">
          <Datagrid rowClick="show">
            <BooleanField label="Accepted" source="accepted" />
            <ReferenceField label="Acceptor" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Creator" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Email" source="email" />
            <TextField label="Expires At" source="expiresAt" />
            <TextField label="Id" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Role" source="role" />
            <ReferenceField label="Team" source="team.id" reference="Team">
              <TextField source={TEAM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Membership"
          target="teamId"
          label="Memberships"
        >
          <Datagrid rowClick="show">
            <BooleanField label="Accepted" source="accepted" />
            <TextField label="Id" source="id" />
            <TextField label="Role" source="role" />
            <ReferenceField label="Team" source="team.id" reference="Team">
              <TextField source={TEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Product"
          target="teamId"
          label="Products"
        >
          <Datagrid rowClick="show">
            <TextField label="Brand Color" source="brandColor" />
            <BooleanField
              label="Click Outside Close"
              source="clickOutsideClose"
            />
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
