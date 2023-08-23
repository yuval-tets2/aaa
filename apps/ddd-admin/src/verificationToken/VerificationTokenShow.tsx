import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const VerificationTokenShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Expires" source="expires" />
        <TextField label="Id" source="id" />
        <TextField label="Identifier" source="identifier" />
        <TextField label="Token" source="token" />
      </SimpleShowLayout>
    </Show>
  );
};
