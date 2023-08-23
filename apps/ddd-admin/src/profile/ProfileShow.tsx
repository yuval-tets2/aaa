import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="End Semester" source="endSemester" />
        <TextField label="End Year" source="endYear" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Start Semester" source="startSemester" />
        <TextField label="Start Year" source="startYear" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
