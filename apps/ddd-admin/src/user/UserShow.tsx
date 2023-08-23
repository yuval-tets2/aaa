import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  DateField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { DEGREEREQUIREMENT_TITLE_FIELD } from "../degreeRequirement/DegreeRequirementTitle";
import { PROFILE_TITLE_FIELD } from "../profile/ProfileTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Account"
          target="userId"
          label="Accounts"
        >
          <Datagrid rowClick="show">
            <TextField label="Access Token" source="accessToken" />
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
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Plan" target="userId" label="Plans">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="End Semester" source="endSemester" />
            <TextField label="End Year" source="endYear" />
            <TextField label="Id" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Requirements"
              source="degreerequirement.id"
              reference="DegreeRequirement"
            >
              <TextField source={DEGREEREQUIREMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Start Semester" source="startSemester" />
            <TextField label="Start Year" source="startYear" />
            <TextField label="Transfer Credits" source="transferCredits" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Session"
          target="userId"
          label="Sessions"
        >
          <Datagrid rowClick="show">
            <TextField label="Expires" source="expires" />
            <TextField label="Id" source="id" />
            <TextField label="Session Token" source="sessionToken" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
