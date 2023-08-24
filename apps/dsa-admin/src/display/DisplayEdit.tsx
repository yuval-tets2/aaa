import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PersonTitle } from "../person/PersonTitle";
import { SurveyTitle } from "../survey/SurveyTitle";

export const DisplayEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="person.id" reference="Person" label="Person">
          <SelectInput optionText={PersonTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "seen", value: "seen" },
            { label: "responded", value: "responded" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="survey.id" reference="Survey" label="Survey">
          <SelectInput optionText={SurveyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
