import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PROFILE_TITLE_FIELD } from "../profile/ProfileTitle";

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
        <TextField label="Email" source="email" />
        <TextField label="Email Verified" source="emailVerified" />
        <TextField label="Id" source="id" />
        <BooleanField label="Onboarding Complete" source="onboardingComplete" />
        <ReferenceField label="Profile" source="profile.id" reference="Profile">
          <TextField source={PROFILE_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField
          label="Seen Home Onboarding Modal"
          source="seenHomeOnboardingModal"
        />
        <BooleanField
          label="Seen Plan Onboarding Modal"
          source="seenPlanOnboardingModal"
        />
      </Datagrid>
    </List>
  );
};
