import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { InviteTitle } from "../invite/InviteTitle";
import { MembershipTitle } from "../membership/MembershipTitle";
import { ResponseNoteTitle } from "../responseNote/ResponseNoteTitle";

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
        <TextInput label="Group Id" source="groupId" />
        <SelectInput
          source="identityProvider"
          label="Identity Provider"
          choices={[
            { label: "email", value: "email" },
            { label: "github", value: "github" },
            { label: "google", value: "google" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput
          label="Identity Provider Account Id"
          source="identityProviderAccountId"
        />
        <ReferenceArrayInput
          source="invitesAccepted"
          reference="Invite"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InviteTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="invitesCreated"
          reference="Invite"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InviteTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="memberships"
          reference="Membership"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MembershipTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <div />
        <SelectInput
          source="objective"
          label="Objective"
          choices={[
            { label: "increase_conversion", value: "increase_conversion" },
            {
              label: "improve_user_retention",
              value: "improve_user_retention",
            },
            {
              label: "increase_user_adoption",
              value: "increase_user_adoption",
            },
            {
              label: "sharpen_marketing_messaging",
              value: "sharpen_marketing_messaging",
            },
            { label: "support_sales", value: "support_sales" },
            { label: "other", value: "other" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput
          label="Onboarding Completed"
          source="onboardingCompleted"
        />
        <ReferenceArrayInput
          source="responseNotes"
          reference="ResponseNote"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ResponseNoteTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="role"
          label="Role"
          choices={[
            { label: "project_manager", value: "project_manager" },
            { label: "engineer", value: "engineer" },
            { label: "founder", value: "founder" },
            { label: "marketing_specialist", value: "marketing_specialist" },
            { label: "other", value: "other" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
