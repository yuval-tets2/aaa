import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { CourseTitle } from "../course/CourseTitle";
import { PlanTitle } from "../plan/PlanTitle";

export const SemesterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Color" source="color" />
        <ReferenceArrayInput
          source="courses"
          reference="Course"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CourseTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Locked" source="locked" />
        <ReferenceInput source="plan.id" reference="Plan" label="Plan">
          <SelectInput optionText={PlanTitle} />
        </ReferenceInput>
        <SelectInput
          source="semester"
          label="Semester"
          choices={[
            { label: "f", value: "f" },
            { label: "s", value: "s" },
            { label: "u", value: "u" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Year" source="year" />
      </SimpleForm>
    </Create>
  );
};
