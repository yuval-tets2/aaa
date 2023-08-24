import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EventClassTitle } from "../eventClass/EventClassTitle";
import { SessionTitle } from "../session/SessionTitle";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
