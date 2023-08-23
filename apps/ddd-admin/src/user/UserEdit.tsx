import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { PlanTitle } from "../plan/PlanTitle";
import { ProfileTitle } from "../profile/ProfileTitle";
import { SessionTitle } from "../session/SessionTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accounts"
          reference="Account"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" />
        <DateTimeInput label="Email Verified" source="emailVerified" />
        <BooleanInput label="Onboarding Complete" source="onboardingComplete" />
        <ReferenceArrayInput
          source="plans"
          reference="Plan"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PlanTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="profile.id" reference="Profile" label="Profile">
          <SelectInput optionText={ProfileTitle} />
        </ReferenceInput>
        <BooleanInput
          label="Seen Home Onboarding Modal"
          source="seenHomeOnboardingModal"
        />
        <BooleanInput
          label="Seen Plan Onboarding Modal"
          source="seenPlanOnboardingModal"
        />
        <ReferenceArrayInput
          source="sessions"
          reference="Session"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SessionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
