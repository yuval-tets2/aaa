import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PlanTitle } from "../plan/PlanTitle";

export const DegreeRequirementCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Bypasses" source="bypasses" />
        <TextInput label="Major" source="major" />
        <ReferenceInput source="plan.id" reference="Plan" label="Plan">
          <SelectInput optionText={PlanTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
