import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { WebsiteTitle } from "../website/WebsiteTitle";
import { WebsiteEventTitle } from "../websiteEvent/WebsiteEventTitle";

export const EventDatumCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Data Type" source="dataType" />
        <DateTimeInput label="Date Value" source="dateValue" />
        <TextInput label="Event Key" source="eventKey" />
        <NumberInput label="Number Value" source="numberValue" />
        <TextInput label="String Value" source="stringValue" />
        <ReferenceInput source="website.id" reference="Website" label="Website">
          <SelectInput optionText={WebsiteTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="websiteEvent.id"
          reference="WebsiteEvent"
          label="Website Event"
        >
          <SelectInput optionText={WebsiteEventTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
