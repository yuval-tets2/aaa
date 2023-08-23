import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SemesterTitle } from "../semester/SemesterTitle";

export const CourseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Color" source="color" />
        <BooleanInput label="Locked" source="locked" />
        <BooleanInput label="Prereq Overriden" source="prereqOverriden" />
        <ReferenceInput
          source="semester.id"
          reference="Semester"
          label="Semester"
        >
          <SelectInput optionText={SemesterTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
