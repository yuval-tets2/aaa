import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SessionTitle } from "../session/SessionTitle";
import { WebsiteTitle } from "../website/WebsiteTitle";

export const SessionDatumEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Data Type" source="dataType" />
        <DateTimeInput label="Date Value" source="dateValue" />
        <TextInput label="Event Key" source="eventKey" />
        <NumberInput label="Number Value" source="numberValue" />
        <ReferenceInput source="session.id" reference="Session" label="Session">
          <SelectInput optionText={SessionTitle} />
        </ReferenceInput>
        <TextInput label="String Value" source="stringValue" />
        <ReferenceInput source="website.id" reference="Website" label="Website">
          <SelectInput optionText={WebsiteTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
