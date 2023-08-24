import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { ATTRIBUTECLASS_TITLE_FIELD } from "../attributeClass/AttributeClassTitle";
import { PERSON_TITLE_FIELD } from "./PersonTitle";
import { SURVEY_TITLE_FIELD } from "../survey/SurveyTitle";
import { ENVIRONMENT_TITLE_FIELD } from "../environment/EnvironmentTitle";

export const PersonShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Environment"
          source="environment.id"
          reference="Environment"
        >
          <TextField source={ENVIRONMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Attribute"
          target="personId"
          label="Attributes"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Attribute Class"
              source="attributeclass.id"
              reference="AttributeClass"
            >
              <TextField source={ATTRIBUTECLASS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Person"
              source="person.id"
              reference="Person"
            >
              <TextField source={PERSON_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Value" source="value" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Display"
          target="personId"
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
          target="personId"
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
          reference="Session"
          target="personId"
          label="Sessions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <DateField source="expiresAt" label="Expires At" />
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Person"
              source="person.id"
              reference="Person"
            >
              <TextField source={PERSON_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
