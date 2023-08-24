import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";
import { RESPONSE_TITLE_FIELD } from "../response/ResponseTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="Email Verified" source="emailVerified" />
        <TextField label="Group Id" source="groupId" />
        <TextField label="Id" source="id" />
        <TextField label="Identity Provider" source="identityProvider" />
        <TextField
          label="Identity Provider Account Id"
          source="identityProviderAccountId"
        />
        <TextField label="Name" source="name" />
        <TextField
          label="Notification Settings"
          source="notificationSettings"
        />
        <TextField label="Objective" source="objective" />
        <BooleanField
          label="Onboarding Completed"
          source="onboardingCompleted"
        />
        <TextField label="Role" source="role" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Account"
          target="userId"
          label="Accounts"
        >
          <Datagrid rowClick="show">
            <TextField label="Access Token" source="accessToken" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Expires At" source="expiresAt" />
            <TextField label="Id" source="id" />
            <TextField label="Id Token" source="idToken" />
            <TextField label="Provider" source="provider" />
            <TextField label="Provider Account Id" source="providerAccountId" />
            <TextField label="Refresh Token" source="refreshToken" />
            <TextField label="Scope" source="scope" />
            <TextField label="Session State" source="sessionState" />
            <TextField label="Token Type" source="tokenType" />
            <TextField label="Type Field" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Invite"
          target="acceptorId"
          label="Invites"
        >
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
          reference="Invite"
          target="creatorId"
          label="Invites"
        >
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
          target="userId"
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
          reference="ResponseNote"
          target="userId"
          label="ResponseNotes"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Response"
              source="response.id"
              reference="Response"
            >
              <TextField source={RESPONSE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Text" source="text" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
