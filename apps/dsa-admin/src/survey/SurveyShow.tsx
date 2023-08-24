import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { ATTRIBUTECLASS_TITLE_FIELD } from "../attributeClass/AttributeClassTitle";
import { SURVEY_TITLE_FIELD } from "./SurveyTitle";
import { PERSON_TITLE_FIELD } from "../person/PersonTitle";
import { EVENTCLASS_TITLE_FIELD } from "../eventClass/EventClassTitle";
import { ENVIRONMENT_TITLE_FIELD } from "../environment/EnvironmentTitle";

export const SurveyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Auto Close" source="autoClose" />
        <TextField label="Auto Complete" source="autoComplete" />
        <TextField label="Close On Date" source="closeOnDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Delay" source="delay" />
        <TextField label="Display Option" source="displayOption" />
        <ReferenceField
          label="Environment"
          source="environment.id"
          reference="Environment"
        >
          <TextField source={ENVIRONMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Questions" source="questions" />
        <TextField label="Recontact Days" source="recontactDays" />
        <TextField label="Redirect Url" source="redirectUrl" />
        <TextField label="Status" source="status" />
        <TextField label="Survey Closed Message" source="surveyClosedMessage" />
        <TextField label="Thank You Card" source="thankYouCard" />
        <TextField label="Type" source="type" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SurveyAttributeFilter"
          target="surveyId"
          label="SurveyAttributeFilters"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Attribute Class"
              source="attributeclass.id"
              reference="AttributeClass"
            >
              <TextField source={ATTRIBUTECLASS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Condition" source="condition" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Survey"
              source="survey.id"
              reference="Survey"
            >
              <TextField source={SURVEY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Value" source="value" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Display"
          target="surveyId"
          label="Displays"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Person"
              source="person.id"
              reference="Person"
            >
              <TextField source={PERSON_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Survey"
              source="survey.id"
              reference="Survey"
            >
              <TextField source={SURVEY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Response"
          target="surveyId"
          label="Responses"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Data" source="data" />
            <BooleanField label="Finished" source="finished" />
            <TextField label="Id" source="id" />
            <TextField label="Meta" source="meta" />
            <ReferenceField
              label="Person"
              source="person.id"
              reference="Person"
            >
              <TextField source={PERSON_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Person Attributes" source="personAttributes" />
            <ReferenceField
              label="Survey"
              source="survey.id"
              reference="Survey"
            >
              <TextField source={SURVEY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SurveyTrigger"
          target="surveyId"
          label="SurveyTriggers"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Event Class"
              source="eventclass.id"
              reference="EventClass"
            >
              <TextField source={EVENTCLASS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Survey"
              source="survey.id"
              reference="Survey"
            >
              <TextField source={SURVEY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
