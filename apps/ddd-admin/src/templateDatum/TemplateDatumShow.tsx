import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TEMPLATEDATUM_TITLE_FIELD } from "./TemplateDatumTitle";
import { TEMPLATE_TITLE_FIELD } from "../template/TemplateTitle";

export const TemplateDatumShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Semester" source="semester" />
        <ReferenceField
          label="Template"
          source="template.id"
          reference="Template"
        >
          <TextField source={TEMPLATE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="TemplateItem"
          target="templateDataId"
          label="TemplateItems"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Template Data"
              source="templatedatum.id"
              reference="TemplateDatum"
            >
              <TextField source={TEMPLATEDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Type" source="type" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
