import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  NumberInput,
  TextInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DegreeRequirementTitle } from "../degreeRequirement/DegreeRequirementTitle";
import { SemesterTitle } from "../semester/SemesterTitle";
import { UserTitle } from "../user/UserTitle";

export const PlanEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="endSemester"
          label="End Semester"
          choices={[
            { label: "f", value: "f" },
            { label: "s", value: "s" },
            { label: "u", value: "u" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="End Year" source="endYear" />
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="requirements.id"
          reference="DegreeRequirement"
          label="Requirements"
        >
          <SelectInput optionText={DegreeRequirementTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="semesters"
          reference="Semester"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SemesterTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="startSemester"
          label="Start Semester"
          choices={[
            { label: "f", value: "f" },
            { label: "s", value: "s" },
            { label: "u", value: "u" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Start Year" source="startYear" />
        <TextInput label="Transfer Credits" source="transferCredits" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
