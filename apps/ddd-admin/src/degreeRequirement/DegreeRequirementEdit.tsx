import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PlanTitle } from "../plan/PlanTitle";

export const DegreeRequirementEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Bypasses" source="bypasses" />
        <TextInput label="Major" source="major" />
        <ReferenceInput source="plan.id" reference="Plan" label="Plan">
          <SelectInput optionText={PlanTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
