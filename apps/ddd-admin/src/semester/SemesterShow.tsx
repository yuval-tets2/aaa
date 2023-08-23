import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SEMESTER_TITLE_FIELD } from "./SemesterTitle";
import { PLAN_TITLE_FIELD } from "../plan/PlanTitle";

export const SemesterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Color" source="color" />
        <TextField label="Id" source="id" />
        <BooleanField label="Locked" source="locked" />
        <ReferenceField label="Plan" source="plan.id" reference="Plan">
          <TextField source={PLAN_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Semester" source="semester" />
        <TextField label="Year" source="year" />
        <ReferenceManyField
          reference="Course"
          target="semesterId"
          label="Courses"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
