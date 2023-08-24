import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EventClassTitle } from "../eventClass/EventClassTitle";
import { SessionTitle } from "../session/SessionTitle";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="eventClass.id"
          reference="EventClass"
          label="Event Class"
        >
          <SelectInput optionText={EventClassTitle} />
        </ReferenceInput>
        <div />
        <ReferenceInput source="session.id" reference="Session" label="Session">
          <SelectInput optionText={SessionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
