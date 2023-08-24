import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SessionDatumTitle } from "../sessionDatum/SessionDatumTitle";
import { WebsiteEventTitle } from "../websiteEvent/WebsiteEventTitle";

export const SessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Browser" source="browser" />
        <TextInput label="City" source="city" />
        <TextInput label="Country" source="country" />
        <TextInput label="Device" source="device" />
        <TextInput label="Hostname" source="hostname" />
        <TextInput label="Language" source="language" />
        <TextInput label="Os" source="os" />
        <TextInput label="Screen" source="screen" />
        <ReferenceArrayInput
          source="sessionData"
          reference="SessionDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SessionDatumTitle} />
        </ReferenceArrayInput>
        <TextInput label="Subdivision1" source="subdivision1" />
        <TextInput label="Subdivision2" source="subdivision2" />
        <ReferenceArrayInput
          source="websiteEvent"
          reference="WebsiteEvent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WebsiteEventTitle} />
        </ReferenceArrayInput>
        <TextInput label="Website Id" source="websiteId" />
      </SimpleForm>
    </Edit>
  );
};
