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
} from "react-admin";

import { RESPONSE_TITLE_FIELD } from "../response/ResponseTitle";
import { TAG_TITLE_FIELD } from "./TagTitle";
import { ENVIRONMENT_TITLE_FIELD } from "../environment/EnvironmentTitle";

export const TagShow = (props: ShowProps): React.ReactElement => {
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
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="TagsOnResponse"
          target="tagId"
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
