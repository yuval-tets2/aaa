import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
