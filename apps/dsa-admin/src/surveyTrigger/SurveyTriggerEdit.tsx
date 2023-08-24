import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EventClassTitle } from "../eventClass/EventClassTitle";
import { SurveyTitle } from "../survey/SurveyTitle";

export const SurveyTriggerEdit = (props: EditProps): React.ReactElement => {
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
        <ReferenceInput source="survey.id" reference="Survey" label="Survey">
          <SelectInput optionText={SurveyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
