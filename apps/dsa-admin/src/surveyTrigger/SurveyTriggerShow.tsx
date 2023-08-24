import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { EVENTCLASS_TITLE_FIELD } from "../eventClass/EventClassTitle";
import { SURVEY_TITLE_FIELD } from "../survey/SurveyTitle";

export const SurveyTriggerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Event Class"
          source="eventclass.id"
          reference="EventClass"
        >
          <TextField source={EVENTCLASS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
        <ReferenceField label="Survey" source="survey.id" reference="Survey">
          <TextField source={SURVEY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
