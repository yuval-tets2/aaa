import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { TEMPLATEDATUM_TITLE_FIELD } from "../templateDatum/TemplateDatumTitle";

export const TemplateItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
