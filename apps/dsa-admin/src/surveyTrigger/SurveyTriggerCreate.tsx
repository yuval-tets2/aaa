import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EventClassTitle } from "../eventClass/EventClassTitle";
import { SurveyTitle } from "../survey/SurveyTitle";

export const SurveyTriggerCreate = (props: CreateProps): React.ReactElement => {
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
        <ReferenceInput source="survey.id" reference="Survey" label="Survey">
          <SelectInput optionText={SurveyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
