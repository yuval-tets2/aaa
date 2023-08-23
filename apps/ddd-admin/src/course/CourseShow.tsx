import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import { SEMESTER_TITLE_FIELD } from "../semester/SemesterTitle";

export const CourseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <TextField label="Color" source="color" />
        <TextField label="Id" source="id" />
        <BooleanField label="Locked" source="locked" />
        <BooleanField label="Prereq Overriden" source="prereqOverriden" />
        <ReferenceField
          label="Semester"
          source="semester.id"
          reference="Semester"
        >
          <TextField source={SEMESTER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
