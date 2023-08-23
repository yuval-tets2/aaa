import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const BypassShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Course Code" source="courseCode" />
        <TextField label="Hours" source="hours" />
        <TextField label="Id" source="id" />
        <TextField label="Requirement" source="requirement" />
      </SimpleShowLayout>
    </Show>
  );
};
