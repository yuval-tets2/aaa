import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { ENVIRONMENT_TITLE_FIELD } from "../environment/EnvironmentTitle";

export const ApiKeyShow = (props: ShowProps): React.ReactElement => {
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
        <TextField label="Hashed Key" source="hashedKey" />
        <TextField label="Id" source="id" />
        <TextField label="Label" source="label" />
        <TextField label="Last Used At" source="lastUsedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
