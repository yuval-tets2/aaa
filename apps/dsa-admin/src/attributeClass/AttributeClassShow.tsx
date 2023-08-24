import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ATTRIBUTECLASS_TITLE_FIELD } from "./AttributeClassTitle";
import { SURVEY_TITLE_FIELD } from "../survey/SurveyTitle";
import { PERSON_TITLE_FIELD } from "../person/PersonTitle";
import { ENVIRONMENT_TITLE_FIELD } from "../environment/EnvironmentTitle";

export const AttributeClassShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Archived" source="archived" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <ReferenceField
          label="Environment"
          source="environment.id"
          reference="Environment"
        >
          <TextField source={ENVIRONMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Type" source="type" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SurveyAttributeFilter"
          target="attributeClassId"
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
          reference="Attribute"
          target="attributeClassId"
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
      </SimpleShowLayout>
    </Show>
  );
};
