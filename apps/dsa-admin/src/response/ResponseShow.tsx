import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { RESPONSE_TITLE_FIELD } from "./ResponseTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";
import { PERSON_TITLE_FIELD } from "../person/PersonTitle";
import { SURVEY_TITLE_FIELD } from "../survey/SurveyTitle";

export const ResponseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Data" source="data" />
        <BooleanField label="Finished" source="finished" />
        <TextField label="Id" source="id" />
        <TextField label="Meta" source="meta" />
        <ReferenceField label="Person" source="person.id" reference="Person">
          <TextField source={PERSON_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Person Attributes" source="personAttributes" />
        <ReferenceField label="Survey" source="survey.id" reference="Survey">
          <TextField source={SURVEY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ResponseNote"
          target="responseId"
          label="ResponseNotes"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Response"
              source="response.id"
              reference="Response"
            >
              <TextField source={RESPONSE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Text" source="text" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagsOnResponse"
          target="responseId"
          label="TagsOnResponses"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Response"
              source="response.id"
              reference="Response"
            >
              <TextField source={RESPONSE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
