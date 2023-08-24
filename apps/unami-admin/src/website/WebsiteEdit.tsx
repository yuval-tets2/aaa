import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EventDatumTitle } from "../eventDatum/EventDatumTitle";
import { ReportTitle } from "../report/ReportTitle";
import { SessionDatumTitle } from "../sessionDatum/SessionDatumTitle";
import { TeamWebsiteTitle } from "../teamWebsite/TeamWebsiteTitle";
import { UserTitle } from "../user/UserTitle";

export const WebsiteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <TextInput label="Domain" source="domain" />
        <ReferenceArrayInput
          source="eventData"
          reference="EventDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventDatumTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="report"
          reference="Report"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReportTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Reset At" source="resetAt" />
        <ReferenceArrayInput
          source="sessionData"
          reference="SessionDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SessionDatumTitle} />
        </ReferenceArrayInput>
        <TextInput label="Share Id" source="shareId" />
        <ReferenceArrayInput
          source="teamWebsite"
          reference="TeamWebsite"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TeamWebsiteTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
