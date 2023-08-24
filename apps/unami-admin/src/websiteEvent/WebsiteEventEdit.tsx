import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EventDatumTitle } from "../eventDatum/EventDatumTitle";
import { SessionTitle } from "../session/SessionTitle";

export const WebsiteEventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="eventData"
          reference="EventDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventDatumTitle} />
        </ReferenceArrayInput>
        <TextInput label="Event Name" source="eventName" />
        <NumberInput step={1} label="Event Type" source="eventType" />
        <TextInput label="Page Title" source="pageTitle" />
        <TextInput label="Referrer Domain" source="referrerDomain" />
        <TextInput label="Referrer Path" source="referrerPath" />
        <TextInput label="Referrer Query" source="referrerQuery" />
        <ReferenceInput source="session.id" reference="Session" label="Session">
          <SelectInput optionText={SessionTitle} />
        </ReferenceInput>
        <TextInput label="Url Path" source="urlPath" />
        <TextInput label="Url Query" source="urlQuery" />
        <TextInput label="Website Id" source="websiteId" />
      </SimpleForm>
    </Edit>
  );
};
